import React, { useCallback, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { RequestApproval } from "../../../../models/RequestApproval";
import { getRequestByUserId } from "../../../../api/RequestApprovalAPI";
import { formatNumber } from "../../../../utils/formatNumber";
import { formatDateStringAcceptNull } from "../../../../utils/formatDateString";
import { ViewJewelryRequestModal } from "../../Modal/Modal";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { useTranslation } from "react-i18next";
import { useDebouncedCallback } from "use-debounce";

interface MyJewelryListProps {
  userId: number | undefined;
  listNumber: number
}

export const MyJewelryRequestList: React.FC<MyJewelryListProps> = ({
  userId, listNumber
}) => {
  const [myJewelryRequestList, setMyJewelryRequestList] = useState<
    RequestApproval[]
  >([]);
  const [totalElements, setTotalElements] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
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

  const handleChangeList = useCallback(async () => {
    setLoading(true);

    if (userId) {
      try {
        const response = await getRequestByUserId(userId, debouncedTxtSearch, page);
        setMyJewelryRequestList(response.requestsData);
        setTotalElements(response.totalElements);
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }, [userId, page, debouncedTxtSearch]);

  useEffect(() => {
    handleChangeList();
  }, [userId, page, handleChangeList, debouncedTxtSearch]);

  useEffect(() => {
    setTxtSearch('')
    debouncedTxtSearchChange('');
  }, [listNumber]);

  const { t } = useTranslation(["MyJewelryRequestList"]);

  return (
    <div
      className="tab-pane fade"
      id="jewelry-request"
      role="tabpanel"
      aria-labelledby="account-address-tab"
    >
      <div className="myaccount-orders">
        <div className="row mb-2">
          <div className="col-md-7">
            <h4 className="small-title fw-bold mt-2">
              {t("MyJewelryRequestList.Danh sách các sản phẩm yêu cầu của tôi")}
            </h4>
          </div>
          <div className="umino-sidebar_categories col-md-5 mb-2" >
            <input
              style={{ height: '40px' }}
              type="text"
              placeholder='Tên trang sức...'
              onChange={handleTxtSearch}
              value={txtSearch}
            />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="text-center">
              <tr>
                <th>{t("MyJewelryRequestList.Mã sản phẩm")}</th>
                <th>{t("MyJewelryRequestList.Tên sản phẩm")}</th>
                <th>{t("MyJewelryRequestList.Giá mong muốn (VNĐ)")}</th>
                <th>{t("MyJewelryRequestList.Thời gian gửi")}</th>
                <th>{t("MyJewelryRequestList.Trạng thái")}</th>
                <th>{t("MyJewelryRequestList.Thao tác")}</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    <Spinner animation="border" />
                  </td>
                </tr>
              ) : myJewelryRequestList.length > 0 ? (
                React.Children.toArray(
                  myJewelryRequestList.map((request) => (
                    <tr>
                      <td>{request.jewelry?.id}</td>
                      <td className="text-start">{request.jewelry?.name}</td>
                      <td>{formatNumber(request.desiredPrice)}</td>
                      <td>
                        {formatDateStringAcceptNull(request?.requestTime)}
                      </td>

                      {request.state === "HIDDEN" ? (
                        <td className="fw-semibold text-start text-danger">
                          Đã bị hủy
                        </td>
                      ) : (
                        <td
                          className={`fw-semibold text-start ${request.isConfirm ? "text-success" : "text-dark"
                            }`}
                        >
                          {request.isConfirm
                            ? t("MyJewelryRequestList.Đã phê duyệt")
                            : t("MyJewelryRequestList.Chưa phê duyệt")}
                        </td>
                      )}
                      <td>
                        <ViewJewelryRequestModal request={request} />
                      </td>
                    </tr>
                  ))
                )
              ) : (
                <tr>
                  <td colSpan={6} className="text-center">
                    <h5 className="fw-semibold lh-base mt-2">
                      {t(
                        "MyJewelryRequestList.Chưa có yêu cầu nào được gửi đi"
                      )}
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
