import React, { useEffect, useState } from "react";
import { Auction } from "../../../../models/Auction";
import { getAuctionByStaffId } from "../../../../api/AuctionAPI";
import { formatDateStringAcceptNull } from "../../../../utils/formatDateString";
import { User } from "../../../../models/User";
import { Link } from "react-router-dom";
import { PaginationControl } from "react-bootstrap-pagination-control";
import "../../../../utils/pagination.css";
import { Spinner } from "react-bootstrap";
import { AssignAuctionModal } from "../../Modal/ModalStaff";
import { useTranslation } from "react-i18next";
import { useDebouncedCallback } from "use-debounce";
interface MyAccountDetailProps {
  user: User | null;
  setUser: (user: User) => void;
  listNumber: number;
}
const AssignedAuctionList: React.FC<MyAccountDetailProps> = (props) => {
  const [auctions, setAuction] = useState<Auction[]>([]);
  const [user, setUser] = useState<User | null>(props.user);
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

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  useEffect(() => {
    setLoading(true);
    if (props.user && props.user.id) {
      getAuctionByStaffId(props.user.id, debouncedTxtSearch, page)
        .then((response) => {
          setAuction(response.auctionsData);
          setTotalElements(response.totalAuctions);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
    setLoading(false);
  }, [props.user, page, debouncedTxtSearch, props.listNumber]);

  useEffect(() => {
    setTxtSearch("");
    debouncedTxtSearchChange("");
  }, [props.listNumber]);
  const { t } = useTranslation(["Staff"]);

  return (
    <div
      className="tab-pane fade"
      id="auction-job"
      role="tabpanel"
      aria-labelledby="account-address-tab"
    >
      <div className="myaccount-orders">
        <div className="row mb-2">
          <div className="col-md-7">
            <h4 className="small-title fw-bold mt-2">
              {t("AssignedAuctionList.Danh sách phiên được phân công")}
            </h4>
          </div>
          <div className="umino-sidebar_categories col-md-5 mb-2">
            <input
              style={{ height: "40px" }}
              type="text"
              placeholder={t("AssignedAuctionList.Tên phiên...")}
              value={txtSearch}
              onChange={handleTxtSearch}
            />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>{t("AssignedAuctionList.Mã phiên")}</th>
                <th>{t("AssignedAuctionList.Tên phiên")}</th>
                <th>{t("AssignedAuctionList.Thời gian bắt đầu")}</th>
                <th>{t("AssignedAuctionList.Trạng thái")}</th>
                <th>{t("AssignedAuctionList.Xem chi tiết")}</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    <Spinner animation="border" />
                  </td>
                </tr>
              ) : auctions.length > 0 ? (
                auctions.map((auction) => (
                  <tr key={auction.id}>
                    <td>{auction.id}</td>
                    <td>{auction.name}</td>
                    <td>{formatDateStringAcceptNull(auction.startDate)}</td>
                    <td>
                      <span
                        className={`fw-bold ${auction.state === "WAITING"
                          ? "text-warning"
                          : auction.state === "ONGOING"
                            ? "text-success"
                            : ""
                          }`}
                      >
                        {auction.state}
                      </span>
                    </td>
                    <td>
                      <AssignAuctionModal auction={auction} />
                      <Link
                        to={`/tai-san-dau-gia/${auction.id}`}
                      >
                        <button className="ms-2 btn btn-warning btn-sm">
                          {t("AssignedAuctionList.Xem")}
                        </button>

                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <td colSpan={6} className="text-center">
                  <h5 className="fw-semibold lh-base mt-2">
                    {t(
                      "AssignedAuctionList.Hiện tại chưa có phiên nào được phân công"
                    )}
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
  );
};
export default AssignedAuctionList;
