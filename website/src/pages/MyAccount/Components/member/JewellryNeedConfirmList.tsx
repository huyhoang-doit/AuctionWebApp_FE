import React, { useCallback, useEffect, useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { Spinner } from "react-bootstrap";
import { User } from "../../../../models/User";
import { RequestApproval } from "../../../../models/RequestApproval";
import { getRequestNeedConfirmByMember } from "../../../../api/RequestApprovalAPI";
import useAccount from "../../../../hooks/useAccount";
import { useTranslation } from "react-i18next";
import MyJewelryNeedConfirmSingle from "./JewelryNeedConfirmSingle";
import { useDebouncedCallback } from "use-debounce";

interface MyJewelryNeedConfirmProps {
  user: User | null;
  setUser: (user: User) => void;
  listNumber: number;
}

const MyJewelryNeedConfirmList: React.FC<MyJewelryNeedConfirmProps> = (props) => {
  const token = localStorage.getItem("access_token");
  const userExit = useAccount(token);

  const [listRequests, setListRequests] = useState<RequestApproval[]>([]);
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
        const response = await getRequestNeedConfirmByMember(user.id, debouncedTxtSearch, page);
        setListRequests(response.requestsData);
        setTotalElements(response.totalElements);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }, [user, page, debouncedTxtSearch]);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  useEffect(() => {
    handleChangeList();
  }, [user, page, props.listNumber, handleChangeList, debouncedTxtSearch]);

  useEffect(() => {
    if (user) {
      handleChangeList();
    }
  }, [user, page, props.listNumber, handleChangeList, debouncedTxtSearch]);

  useEffect(() => {
    setTxtSearch("");
    debouncedTxtSearchChange("");
  }, [props.listNumber]);
  const { t } = useTranslation(["MyJewellryList"]);
  return (
    <><div className="row mb-2">
      <div className="col-md-7">
      </div>
      <div className="umino-sidebar_categories col-md-5 mb-2">
        <input
          style={{ height: "40px" }}
          type="text"
          placeholder={t("MyJewellryList.Tên trang sức...")}
          onChange={handleTxtSearch}
          value={txtSearch}
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
              <th>{t("MyJewellryList.Giá mong muốn")}</th>
              <th>{t("MyJewellryList.Định giá")}</th>
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
            ) : listRequests.length > 0 ? (
              listRequests.map((request) => (
                <MyJewelryNeedConfirmSingle
                  key={request.id}
                  request={request}
                  jewelry={request.jewelry}
                  user={props.user}
                  handleChangeList={handleChangeList}
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

export default MyJewelryNeedConfirmList;
