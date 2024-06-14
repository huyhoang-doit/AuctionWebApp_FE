import React, { useCallback, useEffect, useState } from "react"
import { ViewJewelryRequestModal } from "../Modal/Modal"
import { formatNumber } from "../../../utils/formatNumber";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { getRequestByUserId } from "../../../api/RequestApprovalAPI";
import { RequestApproval } from "../../../models/RequestApproval";
import { formatDateStringAcceptNull } from "../../../utils/formatDateString";
import { Spinner } from "react-bootstrap";

interface MyJewelryListProps {
    userId: number | undefined;
}

export const MyJewelryRequestList: React.FC<MyJewelryListProps> = ({ userId }) => {
    const [myJewelryRequestList, setMyJewelryRequestList] = useState<RequestApproval[]>([]);
    const [totalElements, setTotalElements] = useState(0)
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);


    const handleChangeList = useCallback(async () => {
        setLoading(true)

        if (userId) {
            try {
                const response = await getRequestByUserId(userId, page)
                setMyJewelryRequestList(response.requestsData);
                setTotalElements(response.totalElements);
            } catch (error) {
                console.error(error);
            }
        }
        setLoading(false)

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
                    <thead>
                        <tr>
                            <th className="text-start">Mã sản phẩm</th>
                            <th className="text-start">Tên</th>
                            <th className="text-start">Giá mong muốn (VNĐ)</th>
                            <th className="text-start">Thời gian gửi</th>
                            <th className="text-start">Trạng thái</th>
                            <th className="text-start">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={6} className="text-center">
                                    <Spinner animation="border" />
                                </td>
                            </tr>

                        ) : (myJewelryRequestList.length > 0 ? (React.Children.toArray(myJewelryRequestList.map(
                            (request) =>
                                <tr>
                                    <td className="text-start">
                                        {request.jewelry?.id}
                                    </td>
                                    <td className="text-start">
                                        {request.jewelry?.name}
                                    </td>
                                    <td className="text-start">
                                        {formatNumber(request.desiredPrice)}
                                    </td>
                                    <td className="text-start">
                                        {formatDateStringAcceptNull(request?.requestTime)}
                                    </td>

                                    {request.state === 'HIDDEN' ? (
                                        <td className="fw-semibold text-start text-danger">
                                            Đã bị hủy
                                        </td>
                                    ) : (
                                        <td className={`fw-semibold text-start ${request.isConfirm ? 'text-success' : 'text-dark'}`}>
                                            {request.isConfirm ? 'Đã phê duyệt' : 'Chưa phê duyệt'}
                                        </td>
                                    )}
                                    <td>
                                        <ViewJewelryRequestModal request={request} />
                                        {/* <DeleteJewelryRequestModal jewelry={request.jewelry} request={request} setNotification={setNotification} handleChangeList={handleChangeList} /> */}
                                    </td>
                                </tr>
                        ))) : (
                            <tr>
                                <td colSpan={6} className="text-center">
                                    <h5 className='fw-semibold lh-base mt-2'>Chưa có yêu cầu nào được gửi đi</h5>
                                </td>
                            </tr>))}
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