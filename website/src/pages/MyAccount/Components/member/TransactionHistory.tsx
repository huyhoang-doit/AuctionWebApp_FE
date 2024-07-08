import React, { useCallback, useEffect, useState } from "react";
import { TypeTransaction } from "./TypeTransaction";
import { Spinner } from "react-bootstrap";
import { User } from "../../../../models/User";
import { Transaction } from "../../../../models/Transaction";
import {
  createTransactionForWinnerIfNotExist,
  getTransactionsByUsername,
} from "../../../../api/TransactionAPI";
import { formatNumber } from "../../../../utils/formatNumber";
import { StateTransaction } from "./StateTransaction";
import { TransactionModal, ViewTransactionModal } from "../../Modal/Modal";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { useTranslation } from "react-i18next";
import { useDebouncedCallback } from "use-debounce";

interface TransactionHistoryProps {
  user: User | null;
  isAfterPay: boolean;
  listNumber: number
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  user,
  isAfterPay,
  listNumber
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation(["TransactionHistory"]);
  const [debouncedTxtSearch, setDebouncedTxtSearch] = useState("");
  const [txtSearch, setTxtSearch] = useState("");

  const debouncedTxtSearchChange = useDebouncedCallback((txtSearch: string) => {
    setDebouncedTxtSearch(txtSearch);
  }, 1000);

  const handleTxtSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTxtSearch(value);
    debouncedTxtSearchChange(value);
  };

  const getTransactionList = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    const username = user.username || "";
    try {
      const [transactionsResponse] = await Promise.all([
        getTransactionsByUsername(username, debouncedTxtSearch, page),
      ]);
      setTransactions(transactionsResponse.transactions);
      setTotalElements(transactionsResponse.totalElements);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  }, [user, page, debouncedTxtSearch]);

  useEffect(() => {
    getTransactionList();
  }, [getTransactionList, debouncedTxtSearch, page]);

  useEffect(() => {
    setTxtSearch("");
    debouncedTxtSearchChange("");
  }, [listNumber]);

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
        <div className="row mb-2">
          <div className="col-md-7">
            <h4 className="small-title fw-bold mt-2">
              {t("TransactionHistory.Lịch sử giao dịch")}
            </h4>
          </div>
          <div className="umino-sidebar_categories col-md-5 mb-2">
            <input
              style={{ height: "40px" }}
              type="text"
              placeholder={t("TransactionHistory.Tên tài sản...")}
              value={txtSearch}
              onChange={handleTxtSearch}
            />
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
                <tr >
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
                          transaction.type !== 'PAYMENT_TO_WINNER' ? (
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
                      {t("TransactionHistory.Chưa có giao dịch nào")}
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
