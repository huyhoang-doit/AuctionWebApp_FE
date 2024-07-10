import React, { useCallback, useEffect, useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { Spinner } from "react-bootstrap";
import { User } from "../../../../models/User";
import useAccount from "../../../../hooks/useAccount";
import { useTranslation } from "react-i18next";
import MyJewelrySingle from "./MyJewelrySingle";
import { getJewelriesActiveByUserId } from "../../../../api/JewelryAPI";
import { Jewelry } from "../../../../models/Jewelry";
import { useDebouncedCallback } from "use-debounce";

interface MyJewelriesPassedListProps {
  user: User | null;
  listNumber: number;
  setListNumber: React.Dispatch<React.SetStateAction<number>>
}

const MyJewelriesPassedList: React.FC<MyJewelriesPassedListProps> = (props) => {
  const token = localStorage.getItem("access_token");
  const userExit = useAccount(token);

  const [listJewelries, setListJewelries] = useState<Jewelry[]>([]);
  const [user, setUser] = useState<User | null>(
    userExit?.account || props.user
  );
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(true);
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

  const handleChangeList = useCallback(async () => {
    if (user) {
      setLoading(true);
      try {
        const response = await getJewelriesActiveByUserId(
          user.id,
          debouncedTxtSearch,
          page
        );
        setListJewelries(response.jeweriesData);
        setTotalElements(response.totalElements);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }, [user, debouncedTxtSearch, page]);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  useEffect(() => {
    handleChangeList();
  }, [page, debouncedTxtSearch, props.listNumber]);

  useEffect(() => {
    setTxtSearch("");
    debouncedTxtSearchChange("");
  }, [props.listNumber]);

  useEffect(() => {
    if (user) {
      handleChangeList();
    }
  }, [user]);
  const { t } = useTranslation(["MyJewellryList"]);
  return (
    <>
      <div className="row mb-2">
        <div className="col-md-7">
        </div>
        <div className="umino-sidebar_categories col-md-5 mb-2">
          <input
            style={{ height: "40px" }}
            type="text"
            placeholder={t("MyJewellryList.Tên trang sức...")}
            value={txtSearch}
            onChange={handleTxtSearch}
          />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="text-center">
            <tr>
              <th>{t("MyJewellryList.Mã trang sức")}</th>
              <th style={{ width: "25%" }}>
                {t("MyJewellryList.Tên trang sức")}
              </th>
              <th>{t("MyJewellryList.Ảnh")}</th>
              <th>{t("MyJewellryList.Trạng thái hiện tại")}</th>
              <th>{t("MyJewellryList.Thao tác")}</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center">
                  <Spinner animation="border" />
                </td>
              </tr>
            ) : listJewelries.length > 0 ? (
              listJewelries.map((jewelry) => (
                <MyJewelrySingle
                  key={jewelry.id}
                  jewelry={jewelry}
                  user={props.user}
                />
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">
                  <h5 className="fw-semibold lh-base mt-2">
                    {t("MyJewellryList.Không có sản phẩm nào đợi xác nhận")}
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
    </>
  );
};

export default MyJewelriesPassedList;
