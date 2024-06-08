import React, { useCallback, useEffect, useState } from "react"
import { ViewJewelryRequestModal } from "../Modal/Modal"
import { formatNumber } from "../../../utils/formatNumber";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { getRequestByUserId } from "../../../api/RequestApprovalAPI";
import { RequestApproval } from "../../../models/RequestApproval";
import { formatDateStringAcceptNull } from "../../../utils/formatDateString";

interface MyJewelryListProps {
    userId: number | undefined;
}

export const MyJewelryRequestList: React.FC<MyJewelryListProps> = ({ userId }) => {
    const [myJewelryRequestList, setMyJewelryRequestList] = useState<RequestApproval[]>([]);
    const [totalElements, setTotalElements] = useState(0)
    const [page, setPage] = useState(1);

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
                            <th>Tên</th>
                            <th>Giá mong muốn (VNĐ)</th>
                            <th>Thời gian gửi</th>
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
                                        {formatDateStringAcceptNull(request?.requestTime)}
                                    </td>

                                    {request.state === 'HIDDEN' ? (
                                        <td className="fw-semibold text-danger">
                                            Đã bị hủy
                                        </td>
                                    ) : (
                                        <td className={`fw-semibold ${request.isConfirm ? 'text-success' : 'text-dark'}`}>
                                            {request.isConfirm ? 'Đang xử lý' : 'Chưa phê duyệt'}
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