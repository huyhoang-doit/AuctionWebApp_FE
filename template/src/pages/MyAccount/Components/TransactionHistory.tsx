import React from "react"
import { TypeTransaction } from "./TypeTransaction"
import { formatDateString } from "../../../utils/formatDateString"
import { formatNumber } from "../../../utils/formatNumber"
import { StateTransaction } from "./StateTransaction"
import { ViewTransactionModal } from "../Modal/Modal"
import { Transaction } from "../../../models/Transaction"

interface TransactionHistoryProps {
    transactions: Transaction[];
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
    return (<div
        className="tab-pane fade"
        id="transaction-history"
        role="tabpanel"
        aria-labelledby="account-orders-tab"
    >
        <div className="myaccount-orders">
            <h4 className="small-title">
                Danh sách các giao dịch của tôi
            </h4>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th>Mã giao dịch</th>
                            <th>Loại giao dịch</th>
                            <th>Ngày</th>
                            <th>Số tiền (VNĐ)</th>
                            <th>Trạng thái</th>
                            <th>Xem chi tiết</th>
                        </tr>
                        {React.Children.toArray(transactions.map(
                            (transaction) =>

                                <tr>
                                    <td>
                                        {transaction.id}
                                    </td>
                                    <td>
                                        <TypeTransaction type={transaction.type} />
                                    </td>
                                    <td>{formatDateString(transaction.createDate)}</td>
                                    <td>
                                        {formatNumber(transaction.totalPrice)}
                                    </td>
                                    <td>
                                        <StateTransaction state={transaction.state} />
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
    </div>)
}