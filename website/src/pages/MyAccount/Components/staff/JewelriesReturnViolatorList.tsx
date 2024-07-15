import React, { useCallback, useEffect, useState } from "react";
import { User } from "../../../../models/User";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDebouncedCallback } from "use-debounce";
import { useCategories } from "../../../../hooks/useCategories";
import { getJewelriesReturned } from "../../../../api/JewelryAPI";
import { Jewelry } from "../../../../models/Jewelry";
import JewelriesReturnViolatorSingle from "./JewelriesReturnViolatorSingle";

interface JewelriesReturnViolatorListProps {
  user: User | null;
  setUser: (user: User) => void;
  listNumber: number;
}
const JewelriesReturnViolatorList: React.FC<JewelriesReturnViolatorListProps> = (props) => {
  const [listJewelries, setListJewelries] = useState<Jewelry[]>([]);
  const [user, setUser] = useState<User | null>(props.user);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(true);
  const [debouncedTxtSearch, setDebouncedTxtSearch] = useState("");
  const [txtSearch, setTxtSearch] = useState("");
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
    getJewelriesReturned(debouncedTxtSearch, category, page)
      .then((response) => {
        setListJewelries(response.jeweriesData);
        setTotalElements(response.totalElements);
      })
      .catch((error) => {
        console.error(error.message);
      });
    setLoading(false);
  }, [page, debouncedTxtSearch, category]);

  useEffect(() => {
    handleChangeList();
  }, [user, page, props.listNumber, debouncedTxtSearch, category]);

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
              placeholder={t("JewelriesReturnViolatorList.Tên tài sản...")}
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
                <th>{t("JewelriesReturnViolatorList.Mã tài sản")}</th>
                <th>{t("JewelriesReturnViolatorList.Tên tài sản")}</th>
                <th>{t("JewelriesReturnViolatorList.Chủ tài sản")}</th>
                <th>{t("JewelriesReturnViolatorList.Giá mong muốn")}</th>
                <th>{t("JewelriesReturnViolatorList.Ngày tiếp nhận")}</th>
                <th>{t("JewelriesReturnViolatorList.Thao tác")}</th>
              </tr>
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    <Spinner animation="border" />
                  </td>
                </tr>
              ) : listJewelries.length > 0 ? (
                listJewelries.map((jewelry) => (
                  <JewelriesReturnViolatorSingle
                    key={jewelry.id}
                    jewelry={jewelry}
                    user={props.user}
                    handleChangeList={handleChangeList}
                  />
                ))
              ) : (
                <td colSpan={6} className="text-center">
                  <h5 className="fw-semibold lh-base mt-2">
                    {t("JewelriesReturnViolatorList.Không có giao dịch nào")}
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
    </>
  );
};

export default JewelriesReturnViolatorList;
