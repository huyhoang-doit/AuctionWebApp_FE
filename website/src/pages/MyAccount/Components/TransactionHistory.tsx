import React, { useEffect, useState } from "react";
import { TypeTransaction } from "./TypeTransaction";
import { formatDateString } from "../../../utils/formatDateString";
import { formatNumber } from "../../../utils/formatNumber";
import { StateTransaction } from "./StateTransaction";
import { ViewTransactionModal } from "../Modal/Modal";
import { Transaction } from "../../../models/Transaction";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { User } from "../../../models/User";
import {
  getTransactionsByUsername,
  getTransactionsDashboardByUsername,
} from "../../../api/TransactionAPI";

interface TransactionHistoryProps {
  user: User | null;
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  user,
}) => {
  const [transactionsDashboard, setTransactionsDashboard] = useState<{
    numberTransactionsRequest: number;
    totalPriceJewelryWonByUsername: number;
    totalJewelryWon: number;
    totalBid: number;
  }>({
    numberTransactionsRequest: 0,
    totalPriceJewelryWonByUsername: 0,
    totalJewelryWon: 0,
    totalBid: 0,
  });
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    if (user) {
      const username = user.username ? user.username : "";
      getTransactionsDashboardByUsername(username)
        .then((response) => {
          setTransactionsDashboard({
            numberTransactionsRequest: response.numberTransactionsRequest,
            totalPriceJewelryWonByUsername:
              response.totalPriceJewelryWonByUsername,
            totalJewelryWon: response.totalJewelryWon,
            totalBid: response.totalBid,
          });
        })
        .catch(() => { });
      getTransactionsByUsername(username, page)
        .then((response) => {
          setTransactions(response.transactions);
          setTotalElements(response.totalElements);
        })
        .catch(() => { });
    }
  }, [user, page]);

  return (
    <div
      className="tab-pane fade"
      id="auction-activity"
      role="tabpanel"
      aria-labelledby="account-orders-tab"
    >
      <div className="myaccount-orders">
        <h4 className="small-title fw-bold mb-4">Lịch sử tham gia đấu giá</h4>
        <div className="rating-flex">
          <div className="rating-div">
            <p className="rating-number">{transactionsDashboard.totalBid}</p>
            <p className="rating-text">Số lần đấu giá</p>
          </div>
          <div className="rating-div">
            <p className="rating-number">
              {transactionsDashboard.numberTransactionsRequest}
            </p>
            <p className="rating-text">Số phiên đã đăng kí tham gia</p>
          </div>
          <div className="rating-div">
            <p className="rating-number">
              {transactionsDashboard.totalJewelryWon}
            </p>
            <p className="rating-text">Số tài sản trúng đấu giá</p>
          </div>
          <div className="rating-div">
            <p className="rating-number">
              {formatNumber(
                transactionsDashboard.totalPriceJewelryWonByUsername
              )}{" "}
              ₫
            </p>
            <p className="rating-text">Tổng giá trị tài sản đã trúng đấu giá</p>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th>Mã giao dịch</th>
                <th>Tên tài sản</th>
                <th>Loại giao dịch</th>
                <th>Ngày</th>
                <th>Số tiền (VNĐ)</th>
                <th>Trạng thái</th>
                <th>Xem chi tiết</th>
              </tr>
              {React.Children.toArray(
                transactions.map((transaction) => (
                  <tr>
                    <td>{transaction.id}</td>
                    <td>{transaction.auction?.jewelry?.name}</td>
                    <td>
                      <TypeTransaction type={transaction.type} />
                    </td>
                    <td>{formatDateString(transaction.createDate)}</td>
                    <td>{formatNumber(transaction.totalPrice)}</td>
                    <td>
                      <StateTransaction state={transaction.state} />
                    </td>
                    <td>
                      <ViewTransactionModal />
                    </td>
                  </tr>
                ))
              )}
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
            setPage(page);
          }}
          ellipsis={1}
        />
      </div>
    </div>
  );
};
