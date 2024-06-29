import React, { useCallback, useEffect, useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { Spinner } from "react-bootstrap";
import { User } from "../../../../models/User";
import useAccount from "../../../../hooks/useAccount";
import { useTranslation } from "react-i18next";
import MyJewelrySingle from "./MyJewelrySingle";
import { getJewelriesActiveByUserId } from "../../../../api/JewelryAPI";
import { Jewelry } from "../../../../models/Jewelry";

interface MyJewelriesListProps {
  user: User | null;
  setUser: (user: User) => void;
}

const MyJewelriesList: React.FC<MyJewelriesListProps> = (props) => {
  const token = localStorage.getItem("access_token");
  const userExit = useAccount(token);

  const [listJewelries, setListJewelries] = useState<Jewelry[]>([]);
  const [user, setUser] = useState<User | null>(
    userExit?.account || props.user
  );
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleChangeList = useCallback(async () => {
    if (user) {
      setLoading(true);
      try {
        const response = await getJewelriesActiveByUserId(user.id, page);
        setListJewelries(response.jeweriesData);
        setTotalElements(response.totalElements);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }, [user, page]);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  useEffect(() => {
    handleChangeList();
  }, [page, handleChangeList]);

  useEffect(() => {
    if (user) {
      handleChangeList();
    }
  }, [user]);
  const { t } = useTranslation(["MyJewellryList"]);
  return (
    <>
      <div
        className="tab-pane fade"
        id="my-jewelries"
        role="tabpanel"
        aria-labelledby="account-orders-tab"
      >
        <div className="myaccount-orders">
          <h4 className="small-title">
            Danh sách tài sản của tôi
          </h4>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="text-center">
                <tr>
                  <th>{t("MyJewellryList.Mã trang sức")}</th>
                  <th style={{ width: "25%" }}>
                    {t("MyJewellryList.Tên trang sức")}
                  </th>
                  <th>{t("MyJewellryList.Ảnh")}</th>
                  <th>Trạng thái</th>
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
        </div>
      </div>
    </>
  );
};

export default MyJewelriesList;
