import React from "react"
import { ViewJewelryRequestModal } from "../Modal/Modal"

// interface TransactionHistoryProps {
//     transactions: Transaction[];
// }

export const MyJewelryList: React.FC = () => {
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
                            <th>Tên sản phẩm</th>
                            <th>Ngày yêu cầu</th>
                            <th>Phiên đấu giá</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                        <tr>
                            <td>
                                SP0001
                            </td>
                            <td>
                                Trang sức nữ
                            </td>
                            <td>17/01/2003</td>
                            <td>
                                Chưa có
                            </td>
                            <td>
                                Chờ xác nhận
                            </td>
                            <td>
                                <ViewJewelryRequestModal />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}