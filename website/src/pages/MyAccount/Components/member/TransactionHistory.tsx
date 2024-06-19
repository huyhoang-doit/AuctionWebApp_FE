import React, { useCallback, useEffect, useState } from "react";
import { TypeTransaction } from "./TypeTransaction";
import { Spinner } from "react-bootstrap";
import { User } from "../../../../models/User";
import { Transaction } from "../../../../models/Transaction";
import {
  createTransactionForWinnerIfNotExist,
  getTransactionsByUsername,
  getTransactionsDashboardByUsername,
} from "../../../../api/TransactionAPI";
import { formatNumber } from "../../../../utils/formatNumber";
import { StateTransaction } from "./StateTransaction";
import { TransactionModal, ViewTransactionModal } from "../../Modal/Modal";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { useTranslation } from "react-i18next";

interface TransactionHistoryProps {
  user: User | null;
  isAfterPay: boolean;
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  user,
  isAfterPay,
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
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation(["TransactionHistory"]);

  const getTransactionList = useCallback(async () => {
    if (!user) return;

    setLoading(true);
    const username = user.username || "";

    try {
      const [dashboardResponse, transactionsResponse] = await Promise.all([
        getTransactionsDashboardByUsername(username),
        getTransactionsByUsername(username, page),
      ]);

      setTransactionsDashboard({
        numberTransactionsRequest: dashboardResponse.numberTransactionsRequest,
        totalPriceJewelryWonByUsername:
          dashboardResponse.totalPriceJewelryWonByUsername,
        totalJewelryWon: dashboardResponse.totalJewelryWon,
        totalBid: dashboardResponse.totalBid,
      });

      setTransactions(transactionsResponse.transactions);
      setTotalElements(transactionsResponse.totalElements);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  }, [user, page]);

  useEffect(() => {
    getTransactionList();
  }, [getTransactionList]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (!user) return;

      const createdTransactions = await createTransactionForWinnerIfNotExist(user.id);
      if (createdTransactions.length === 0) return;
      setTransactions(prevTransactions => [
        ...prevTransactions,
        ...createdTransactions
      ]);

      setLoading(false);
    };
    fetchData();
  }, [user]);

  return (
    <div
      className={`tab-pane fade ${isAfterPay ? "active" : ""}`}
      id="auction-activity"
      role="tabpanel"
      aria-labelledby="account-orders-tab"
    >
      <div className="myaccount-orders">
        <h4 className="small-title fw-bold mb-4">
          {t("TransactionHistory.Lịch sử tham gia đấu giá")}
        </h4>
        <div className="rating-flex">
          <div className="rating-div">
            <p className="rating-number">{transactionsDashboard.totalBid}</p>
            <p className="rating-text">
              {t("TransactionHistory.Số lần đấu giá")}
            </p>
          </div>
          <div className="rating-div">
            <p className="rating-number">
              {transactionsDashboard.numberTransactionsRequest}
            </p>
            <p className="rating-text">
              {" "}
              {t("TransactionHistory.Số phiên đã đăng kí tham gia")}
            </p>
          </div>
          <div className="rating-div">
            <p className="rating-number">
              {transactionsDashboard.totalJewelryWon}
            </p>
            <p className="rating-text">
              {t("TransactionHistory.Số tài sản trúng đấu giá")}
            </p>
          </div>
          <div className="rating-div">
            <p className="rating-number">
              {formatNumber(
                transactionsDashboard.totalPriceJewelryWonByUsername
              )}{" "}
              ₫
            </p>
            <p className="rating-text">
              {t("TransactionHistory.Tổng giá trị tài sản đã trúng đấu giá")}
            </p>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-start">
                  {t("TransactionHistory.Mã giao dịch")}
                </th>
                <th>{t("TransactionHistory.Tên tài sản")}</th>
                <th>{t("TransactionHistory.Số tiền (VNĐ)")}</th>
                <th>{t("TransactionHistory.Loại giao dịch")}</th>
                <th>{t("TransactionHistory.Trạng thái")}</th>
                <th>{t("TransactionHistory.Xem chi tiết")}</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="text-center">
                    <Spinner animation="border" />
                  </td>
                </tr>
              ) : transactions.length > 0 ? (
                React.Children.toArray(
                  transactions.map((transaction) => (
                    <tr>
                      <td>{transaction.id}</td>
                      <td className="text-start">
                        {transaction.auction?.jewelry?.name}
                      </td>
                      <td className="text-start">
                        {formatNumber(transaction.totalPrice)}
                      </td>
                      <td className="text-start">
                        <TypeTransaction type={transaction.type} />
                      </td>
                      <td className="text-center" style={{ width: "125px" }}>
                        <StateTransaction state={transaction.state} />
                      </td>
                      <td style={{ width: "125px" }}>
                        {transaction.state === "SUCCEED" ||
                        transaction.paymentMethod === "PAY_AT_COUNTER" ? (
                          <ViewTransactionModal transaction={transaction} />
                        ) : (
                          <TransactionModal
                            transaction={transaction}
                            getTransactionList={getTransactionList}
                          />
                        )}
                      </td>
                    </tr>
                  ))
                )
              ) : (
                <tr>
                  <td colSpan={7} className="text-center">
                    <h5 className="fw-semibold lh-base mt-2">
                      {t("TransactionHistory.Chưa thực hiện đấu giá nào")}
                    </h5>
                  </td>
                </tr>
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
