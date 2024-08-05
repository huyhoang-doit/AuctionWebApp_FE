import React, { useContext } from "react";
import { Auction } from "../../../models/Auction";
import { AuctionHistory } from "../../../models/AuctionHistory";
import { AuctionHistoryItem } from "./AuctionHistoryItem";
import Stomp from "stompjs";
import { User } from "../../../models/User";
import { UserContext } from "../../../hooks/useContext";
import { useTranslation } from "react-i18next";

interface AuctionDetailHistoryProps {
  auction: Auction | null;
  auctionHistories: AuctionHistory[];
  setBidPerPage: (bid: number) => void;
  stompClient: Stomp.Client | null;
  connected: boolean;
  staff: User | null;
}

export const AuctionDetailHistory: React.FC<AuctionDetailHistoryProps> = ({
  stompClient,
  connected,
  auctionHistories,
  setBidPerPage,
  auction,
  staff,
}) => {
  const context = useContext(UserContext);

  let user: User | null = null;
  if (context?.account) {
    user = context.account;
  }

  const { t } = useTranslation(["Components"]);
  return (
    <div id="history" className="tab-pane active show" role="tabpanel">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {t("AuctionDetailHistory.Hiển thị")}
          <select
            onChange={(e) => setBidPerPage(Number(e.target.value))}
            defaultValue={3}
            className="btn-group ms-1 me-1"
          >
            <option value={3} className="dropdown-item">
              3
            </option>
            <option value={5} className="dropdown-item">
              5
            </option>
            <option value={10} className="dropdown-item">
              10
            </option>
          </select>
          {t("AuctionDetailHistory.lượt trả giá")}
        </div>
        <span style={{ flex: "end" }}>
          <input
            type="text"
            placeholder={t("AuctionDetailHistory.Tìm kiếm...")}
            style={{ borderRadius: "10px", height: "35px", padding: "10px" }}
          />
        </span>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered specification-inner_stuff mt-4">
          <thead>
            <tr>
              <th className="col-1">
                <b>{t("AuctionDetailHistory.Mã số")}</b>
              </th>
              <th className="col-3">
                {t("AuctionDetailHistory.Người trả giá")}
              </th>
              <th className="col-2">{t("AuctionDetailHistory.Trạng thái")}</th>
              <th className="col-2">
                <b>{t("AuctionDetailHistory.Giá")}</b>
              </th>
              <th className="col-2">
                <b>{t("AuctionDetailHistory.Thời gian")}</b>
              </th>
              <th className="col-1">
                <b>{t("AuctionDetailHistory.Mã trả giá")}</b>
              </th>
              {auction?.state !== "FINISHED" &&
                user?.username !== staff?.username && (
                  <th className="col-1">
                    <b>{t("AuctionDetailHistory.Rút lại giá")}</b>
                  </th>
                )}
              {auction?.state !== "FINISHED" &&
                user?.username === staff?.username && (
                  <th className="col-1">
                    <b>{t("AuctionDetailHistory.Thao tác")}</b>
                  </th>
                )}
            </tr>
          </thead>
          <AuctionHistoryItem
            staff={staff}
            user={user}
            stompClient={stompClient}
            connected={connected}
            auctionHistories={auctionHistories}
            auction={auction}
          />
        </table>
      </div>
    </div>
  );
};
