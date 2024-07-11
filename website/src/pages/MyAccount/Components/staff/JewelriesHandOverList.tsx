import React, { useCallback, useEffect, useState } from "react";
import { User } from "../../../../models/User";
import JewelryHandOverSingle from "./JewelryHandOverSingle";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { Spinner } from "react-bootstrap";
import { Transaction } from "../../../../models/Transaction";
import { getHandoverTransaction } from "../../../../api/TransactionAPI";
import { useTranslation } from "react-i18next";
import { useDebouncedCallback } from "use-debounce";

interface JewelriesHandOverListProps {
  user: User | null;
  setUser: (user: User) => void;
  listNumber: number;
}
const JewelriesHandOverList: React.FC<JewelriesHandOverListProps> = (props) => {
  const [listTransactions, setListTransactions] = useState<Transaction[]>([]);
  const [user, setUser] = useState<User | null>(props.user);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(true);
  const [debouncedTxtSearch, setDebouncedTxtSearch] = useState("");
  const [txtSearch, setTxtSearch] = useState("");
  const type: string = "PAYMENT_TO_WINNER";
  const { t } = useTranslation(["Staff"]);

  const debouncedTxtSearchChange = useDebouncedCallback((txtSearch: string) => {
    setDebouncedTxtSearch(txtSearch);
  }, 1000);

  const handleTxtSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTxtSearch(value);
    debouncedTxtSearchChange(value);
  };

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);
  const handleChangeList = useCallback(async () => {
    setLoading(true);
    getHandoverTransaction(type, debouncedTxtSearch, page)
      .then((response) => {
        setListTransactions(response.transactions);
        setTotalElements(response.totalElements);
      })
      .catch((error) => {
        console.error(error.message);
      });
    setLoading(false);
  }, [props.user, page, props.listNumber, debouncedTxtSearch]);

  useEffect(() => {
    handleChangeList();
  }, [user, page, props.listNumber, debouncedTxtSearch]);

  useEffect(() => {
    setTxtSearch("");
    debouncedTxtSearchChange("");
  }, [props.listNumber]);

  return (
    <>
      <div
        className="tab-pane fade"
        id="account-address"
        role="tabpanel"
        aria-labelledby="account-address-tab"
      >
        <div className="myaccount-orders">
          <div className="row mb-2">
            <div className="col-md-7">
              <h4 className="small-title fw-bold mt-2">
                {t("JewelriesHandOverList.Danh sách tài sản bàn giao")}
              </h4>
            </div>
            <div className="umino-sidebar_categories col-md-5 mb-2">
              <input
                style={{ height: "40px" }}
                type="text"
                placeholder={t("JewelriesHandOverList.Tên tài sản...")}
                value={txtSearch}
                onChange={handleTxtSearch}
              />
            </div>
          </div>
          <h4 className="small-title"></h4>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <tbody>
                <tr>
                  <th>{t("JewelriesHandOverList.Mã tài sản")}</th>
                  <th>{t("JewelriesHandOverList.Tên tài sản")}</th>
                  <th>{t("JewelriesHandOverList.Phiên đấu")}</th>
                  <th>{t("JewelriesHandOverList.Giá cuối")}</th>
                  <th>{t("JewelriesHandOverList.Phương thức thanh toán")}</th>
                  <th>{t("JewelriesHandOverList.Thao tác")}</th>
                </tr>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center">
                      <Spinner animation="border" />
                    </td>
                  </tr>
                ) : listTransactions.length > 0 ? (
                  listTransactions.map((transaction) => (
                    <JewelryHandOverSingle
                      key={transaction.id}
                      transaction={transaction}
                      user={props.user}
                      handleChangeList={handleChangeList}
                    />
                  ))
                ) : (
                  <td colSpan={6} className="text-center">
                    <h5 className="fw-semibold lh-base mt-2">
                      {t("JewelriesHandOverList.Không có giao dịch nào")}
                    </h5>
                  </td>
                )}
              </tbody>
            </table>
            <div className="mt-4">
              <PaginationControl
                page={page}
                between={5}
                total={totalElements}
                limit={5}
                changePage={(page) => {
                  setPage(page);
                }}
                ellipsis={1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JewelriesHandOverList;
