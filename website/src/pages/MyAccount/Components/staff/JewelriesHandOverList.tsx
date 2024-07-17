import React, { useCallback, useEffect, useState } from "react";
import { User } from "../../../../models/User";
import JewelryHandOverSingle from "./JewelryHandOverSingle";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { Spinner } from "react-bootstrap";
import { Transaction } from "../../../../models/Transaction";
import { getHandoverTransaction } from "../../../../api/TransactionAPI";
import { useTranslation } from "react-i18next";
import { useDebouncedCallback } from "use-debounce";
import { useCategories } from "../../../../hooks/useCategories";

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
  const [category, setCategory] = useState("Tất cả");
  const categories = useCategories();
  const categoryNames: (string | undefined)[] = categories.map(
    (category) => category.name
  );
  categoryNames.unshift("Tất cả");
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
    getHandoverTransaction(type, debouncedTxtSearch, category, page)
      .then((response) => {
        setListTransactions(response.transactions);
        setTotalElements(response.totalElements);
      })
      .catch((error) => {
        console.error(error.message);
      });
    setLoading(false);
  }, [page, debouncedTxtSearch, category]);

  useEffect(() => {
    handleChangeList();
  }, [user, page, props.listNumber, handleChangeList, debouncedTxtSearch, category]);

  useEffect(() => {
    setTxtSearch("");
    debouncedTxtSearchChange("");
    setCategory("Tất cả");
  }, [props.listNumber]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setPage(1);
    setTxtSearch("");
    debouncedTxtSearchChange("");
  };
  return (
    <>
      <div className="myaccount-orders">
        <div className="row mb-2">
          <div className="col-md-5">
          </div>
          <div className="umino-sidebar_categories col-md-4 p-0 mb-2">
            <input
              style={{ height: "40px" }}
              type="text"
              placeholder={t("JewelriesHandOverList.Tên tài sản...")}
              value={txtSearch}
              onChange={handleTxtSearch}
            />
          </div>
          <div className="umino-sidebar_categories col-md-3 mb-2 flex">
            <select
              className="rounded"
              value={category}
              onChange={handleCategoryChange}
              style={{
                width: "100%",
                height: "40px",
                padding: "0 0 0 10px",
                borderColor: "#fdb828",
                borderWidth: "2px",
              }}
              required
            >
              {categoryNames.map((category, index) => (
                <option
                  style={{ padding: "5px" }}
                  key={index}
                  value={category}
                >
                  {t(`JewelriesWaitList.${category}`)}
                </option>
              ))}
            </select>
          </div>
        </div>
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
                <tr>
                  <td colSpan={6} className="text-center">
                    <h5 className="fw-semibold lh-base mt-2">
                      {t("JewelriesHandOverList.Không có giao dịch nào")}
                    </h5>
                  </td>
                </tr>
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
    </>
  );
};

export default JewelriesHandOverList;
