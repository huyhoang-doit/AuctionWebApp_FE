import React, { useEffect, useState } from "react"
import { ViewTransactionModal } from "../Modal/Modal"
import { getJewelriesPagination } from "../../../api/JewelryAPI";
import { Jewelry } from "../../../models/Jewelry";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { formatNumber } from "../../../utils/formatNumber";

// interface TransactionHistoryProps {
//     transactions: Transaction[];
// }

interface MyJewelryListProps {
    username: string | undefined;
}

export const MyJewelryList: React.FC<MyJewelryListProps> = ({ username }) => {
    const [myJewelryList, setMyJewelryList] = useState<Jewelry[]>([]);
    const [totalElements, setTotalElements] = useState(0)
    const [page, setPage] = useState(0);
    useEffect(() => {
        if (username) {
            getJewelriesPagination(username, page)
                .then((response) => {
                    setMyJewelryList(response.jeweriesData);
                    setTotalElements(response.totalElements);
                })
                .catch(() => {
                });
        }
    }, [username, page]);
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
                        {React.Children.toArray(myJewelryList.map(
                            (jewelry) =>
                                <tr>
                                    <td>
                                        {jewelry.id}
                                    </td>
                                    <td>
                                        {jewelry.name}
                                    </td>
                                    <td>
                                        {formatNumber(jewelry.price)}
                                    </td>
                                    <td>
                                        {formatNumber(jewelry.price)}
                                    </td>
                                    <td>
                                        {jewelry.state}
                                    </td>
                                    <td>
                                        <ViewTransactionModal />
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