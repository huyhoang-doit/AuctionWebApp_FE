import { useEffect, useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { Spinner } from "react-bootstrap";
import MyBidHistorySingle from "./MyBidHistorySingle";
import { User } from "../../../../models/User";
import { getAuctionRegistrationByUserId } from "../../../../api/AuctionRegistrationAPI";
import { Error } from "../../../Error-Loading/Error";
import { AuctionRegistration } from "../../../../models/AuctionRegistration";
import { useTranslation } from "react-i18next";
import { getTransactionsDashboardByUsername } from "../../../../api/TransactionAPI";
import { formatNumber } from "../../../../utils/formatNumber";
import { useDebouncedCallback } from "use-debounce";

interface MyBidHistoryListProps {
  user: User | null;
  listNumber: number
}

export const MyBidHistoryList: React.FC<MyBidHistoryListProps> = ({ user, listNumber }) => {
  const [userAuctionRegistration, setUserAuctionRegistration] = useState<
    AuctionRegistration[]
  >([]);
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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
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

  useEffect(() => {
    const getTransactionList = async () => {
      if (!user) return;

      setLoading(true);
      const username = user.username || "";
      try {
        const [dashboardResponse] = await Promise.all([
          getTransactionsDashboardByUsername(username),
        ]);
        setTransactionsDashboard({
          numberTransactionsRequest: dashboardResponse.numberTransactionsRequest,
          totalPriceJewelryWonByUsername: dashboardResponse.totalPriceJewelryWonByUsername,
          totalJewelryWon: dashboardResponse.totalJewelryWon,
          totalBid: dashboardResponse.totalBid,
        });
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };
    getTransactionList();
  }, [user]);

  useEffect(() => {
    const getAuctionByUser = async () => {
      setLoading(true);
      if (user) {
        setLoading(true);
        getAuctionRegistrationByUserId(user.id, debouncedTxtSearch, page)
          .then((response) => {
            setUserAuctionRegistration(response.auctionRegistrationsData);
            setTotalElements(response.totalElements);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      }
      setLoading(false);
    };
    getAuctionByUser();
  }, [user, debouncedTxtSearch, page]);

  if (error) {
    <Error error={error} />;
  }

  useEffect(() => {
    setTxtSearch("");
    debouncedTxtSearchChange("");
  }, [listNumber]);

  const { t } = useTranslation(["MyBidHistoryList"]);

  return (
    <div
      className="tab-pane fade"
      id="bid-activity"
      role="tabpanel"
      aria-labelledby="account-address-tab"
    >
      <h4 className="small-title mb-4 fw-bold">
        {t("MyBidHistoryList.Đấu giá của tôi")}
      </h4>
      <div className="rating-flex">
        <div className="rating-div">
          <p className="rating-number">{transactionsDashboard.totalBid}</p>
          <p className="rating-text">
            {t("MyBidHistoryList.Số lần đấu giá")}
          </p>
        </div>
        <div className="rating-div">
          <p className="rating-number">
            {transactionsDashboard.numberTransactionsRequest}
          </p>
          <p className="rating-text">
            {" "}
            {t("MyBidHistoryList.Số phiên đã đăng kí tham gia")}
          </p>
        </div>
        <div className="rating-div">
          <p className="rating-number">
            {transactionsDashboard.totalJewelryWon}
          </p>
          <p className="rating-text">
            {t("MyBidHistoryList.Số tài sản trúng đấu giá")}
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
            {t("MyBidHistoryList.Tổng giá trị tài sản đã trúng đấu giá")}
          </p>
        </div>
      </div>


      <div className="row mb-2">
        <div className="col-md-7">
          <h4 className="small-title mt-2 fw-bold">
            {t("MyBidHistoryList.Lịch sử tham gia")}
          </h4>
        </div>
        <div className="umino-sidebar_categories col-md-5 mb-2">
          <input
            style={{ height: "40px" }}
            type="text"
            placeholder={t("MyBidHistoryList.Tên phiên...")}
            value={txtSearch}
            onChange={handleTxtSearch}
          />
        </div>
      </div>
      <div className="myaccount-orders">
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>{t("MyBidHistoryList.Mã phiên")}</th>
                <th style={{ width: "200px" }}>{t("MyBidHistoryList.Tên phiên")}</th>
                <th>{t("MyBidHistoryList.Trạng thái")}</th>
                <th>{t("MyBidHistoryList.Kết quả")}</th>
                <th>{t("MyBidHistoryList.Thao tác")}</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    <Spinner animation="border" />
                  </td>
                </tr>
              ) : userAuctionRegistration.length > 0 ? (
                userAuctionRegistration.map((auctionRegistration, index) => (
                  <MyBidHistorySingle
                    key={index}
                    auctionRegistration={auctionRegistration}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center">
                    <h5 className="fw-semibold lh-base mt-2">
                      {t("MyBidHistoryList.Chưa có đấu giá nào")}{" "}
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
          limit={10}
          changePage={(page) => {
            setPage(page);
          }}
          ellipsis={1}
        />
      </div>
    </div>
  );
};
