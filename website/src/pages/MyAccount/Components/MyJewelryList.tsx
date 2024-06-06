import React, { useCallback, useEffect, useState } from "react"
import { DeleteJewelryRequestModal, ViewJewelryRequestModal, ViewTransactionModal } from "../Modal/Modal"
import { formatNumber } from "../../../utils/formatNumber";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { getRequestByUserId } from "../../../api/RequestApprovalAPI";
import { RequestApproval } from "../../../models/RequestApproval";

interface MyJewelryListProps {
    userId: number | undefined;
}

export const MyJewelryList: React.FC<MyJewelryListProps> = ({ userId }) => {
    const [myJewelryRequestList, setMyJewelryRequestList] = useState<RequestApproval[]>([]);
    const [totalElements, setTotalElements] = useState(0)
    const [page, setPage] = useState(1);
    const [notification, setNotification] = useState<string>('');

    useEffect(() => {
        if (userId) {
            getRequestByUserId(userId, page)
                .then((response) => {
                    setMyJewelryRequestList(response.requestsData);
                    setTotalElements(response.totalElements);
                })
                .catch(() => {
                });
        }
    }, [userId, page]);
    const handleChangeList = useCallback(async () => {
        if (userId) {
            try {
                const response = await getRequestByUserId(userId, page)
                setMyJewelryRequestList(response.requestsData);
                setTotalElements(response.totalElements);
            } catch (error) {
                console.error(error);
            }
        }
    }, [userId, page]);

    useEffect(() => {
        handleChangeList();
    }, [userId, page, handleChangeList]);
    return (<div
        className="tab-pane fade"
        id="jewelry-request"
        role="tabpanel"
        aria-labelledby="account-address-tab"
    >
        <div className="myaccount-orders">
            <h4 className="small-title">
                Danh sách các sản phẩm yêu cầu của tôi
            </h4>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên trang sức</th>
                            <th>Giá yêu cầu (VNĐ)</th>
                            <th>Được định giá (VNĐ)</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                        {React.Children.toArray(myJewelryRequestList.map(
                            (request) =>
                                <tr>
                                    <td>
                                        {request.jewelry?.id}
                                    </td>
                                    <td>
                                        {request.jewelry?.name}
                                    </td>
                                    <td>
                                        {formatNumber(request.desiredPrice)}
                                    </td>
                                    <td>
                                        {formatNumber(request.valuation)}
                                    </td>

                                    {request.state === 'HIDDEN' ? (
                                        <td className="fw-semibold text-danger">
                                            Đã bị hủy
                                        </td>
                                    ) : (
                                        <td className={`fw-semibold ${request.isConfirm ? 'text-success' : 'text-dark'}`}>
                                            {request.isConfirm ? 'Đã phê duyệt' : 'Chưa phê duyệt'}
                                        </td>
                                    )}
                                    <td>
                                        <ViewJewelryRequestModal request={request} />
                                        {/* <DeleteJewelryRequestModal jewelry={request.jewelry} request={request} setNotification={setNotification} handleChangeList={handleChangeList} /> */}
                                    </td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="mt-4">
            <PaginationControl
                page={page}
                between={3}
                total={totalElements}
                limit={5}
                changePage={(page) => {
                    setPage(page)
                }}
                ellipsis={1}
            />
        </div>
    </div>
    )
}