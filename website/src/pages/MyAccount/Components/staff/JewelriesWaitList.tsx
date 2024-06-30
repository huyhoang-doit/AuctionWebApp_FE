import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { JewelryWaitSingle } from "./JewelryWaitSingle";
import { User } from "../../../../models/User";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { getRequestByRoleOfSender } from "../../../../api/RequestApprovalAPI";
import { RequestApproval } from "../../../../models/RequestApproval";
import { Spinner, ToastContainer } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDebouncedCallback } from "use-debounce";

interface JewelriesWaitListProps {
  user: User | null;
  setUser: (user: User) => void;
  listNumber: number;
}

const JewelriesWaitList: React.FC<JewelriesWaitListProps> = (props) => {
  const [listRequests, setListRequests] = useState<RequestApproval[]>([]);
  const [user, setUser] = useState<User | null>(props.user);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [notification, setNotification] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation(["Staff"]);
  const [debouncedTxtSearch, setDebouncedTxtSearch] = useState('');
  const [txtSearch, setTxtSearch] = useState('');

  const debouncedTxtSearchChange = useDebouncedCallback(
    (txtSearch: string) => {
      setDebouncedTxtSearch(txtSearch);
    },
    1000
  );

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
    try {
      const response = await getRequestByRoleOfSender("MEMBER", debouncedTxtSearch, page);
      if (response.requestsData.length > 0) {
      }
      setListRequests(response.requestsData);
      setTotalElements(response.totalElements);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [page, props.listNumber, debouncedTxtSearch]);

  useEffect(() => {
    setTxtSearch('')
    debouncedTxtSearchChange('');
  }, [props.listNumber]);

  useEffect(() => {
    handleChangeList();
  }, [user, page, props.listNumber, debouncedTxtSearch]);
  return (
    <>
      <div
        className="tab-pane fade"
        id="account-orders"
        role="tabpanel"
        aria-labelledby="account-orders-tab"
      >
        <div className="myaccount-orders">
          <div className="row mb-2">
            <div className="col-md-7">
              <h4 className="small-title fw-bold mt-2">
                {t("JewelriesWaitList.Danh sách sản phẩm gửi đến")}
              </h4>
            </div>
            <div className="umino-sidebar_categories col-md-5 mb-2" >
              <input
                style={{ height: '40px' }}
                type="text"
                placeholder='Tên trang sức...'
                value={txtSearch}
                onChange={handleTxtSearch}
              />
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <tbody>
                <tr>
                  <th>{t("JewelriesWaitList.Mã trang sức")}</th>
                  <th style={{ width: "30%" }}>
                    {t("JewelriesWaitList.Tên trang sức")}
                  </th>
                  <th>{t("JewelriesWaitList.Người gửi")}</th>
                  <th>{t("JewelriesWaitList.Giá")}</th>
                  <th>{t("JewelriesWaitList.Ảnh")}</th>
                  <th>{t("JewelriesWaitList.Xem chi tiết")}</th>
                </tr>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center">
                      <Spinner animation="border" />
                    </td>
                  </tr>
                ) : listRequests.length > 0 ? (
                  listRequests.map((request) => (
                    <JewelryWaitSingle
                      key={request.id}
                      request={request}
                      jewelry={request.jewelry}
                      user={props.user}
                      setNotification={setNotification}
                      handleChangeList={handleChangeList}
                    />
                  ))
                ) : (
                  <td colSpan={6} className="text-center">
                    <h5 className="fw-semibold lh-base mt-2">
                      {t("JewelriesWaitList.Chưa có yêu cầu nào được gửi đến")}
                    </h5>
                  </td>
                )}
              </tbody>
            </table>
            <ToastContainer />
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

export default JewelriesWaitList;
