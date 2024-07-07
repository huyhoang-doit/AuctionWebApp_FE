import React, { useEffect, useState } from "react";
import { AuctionRegistration } from "../../../../models/AuctionRegistration";
import { Auction } from "../../../../models/Auction";
import { getWinnerByAuctionId } from "../../../../api/UserAPI";
import { getAuction } from "../../../../api/AuctionAPI";
import { StateAuctionView } from "../../../AuctionList/Components/StateAuctionView";
import { Link } from "react-router-dom";
import { ViewBidHistoryModal } from "../../Modal/Modal";
import { useTranslation } from "react-i18next";

interface MyBidHistorySingleProps {
  auctionRegistration: AuctionRegistration;
}

const MyBidHistorySingle: React.FC<MyBidHistorySingleProps> = ({
  auctionRegistration,
}) => {
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");
  const [auctionId, setAuctionId] = useState(auctionRegistration.auction?.id);
  const [auction, setAuction] = useState<Auction | null>(null);
  const [userId, setUserId] = useState(auctionRegistration.user?.id);
  const [auctionHistoryState, setAuctionHistoryState] = useState("ACTIVE");
  const { t, i18n } = useTranslation(["Member"]);

  const updateStatus = async () => {
    const auctionState = auctionRegistration?.auction?.state;

    switch (auctionState) {
      case "FINISHED":
        if (auctionRegistration.auction?.lastPrice === null) {
          setStatus(t("Member.Thấtbại"));
          setStatusColor("red");
        } else {
          try {
            const winnerData = await getWinnerByAuctionId(
              auctionRegistration?.auction?.id
            );
            if (winnerData) {
              if (winnerData.id === auctionRegistration?.user?.id) {
                setStatus(t("Member.Thắngphiên"));
                setStatusColor("#198754");
              } else {
                setStatus(t("Member.Thấtbại"));
                setStatusColor("red");
              }
            }
          } catch (error) {
            console.error("Error fetching winner:", error);
          }
        }
        break;
      default:
        setStatus(t("Member.Chưaxácđịnh"));
        setStatusColor("black");
        break;
    }
  };

  useEffect(() => {
    if (auctionRegistration.state === "KICKED_OUT") {
      setStatus(t("Member.Rútlui"));
      setStatusColor("#b41712");
      setAuctionHistoryState("HIDDEN");
    } else {
      updateStatus();
    }
  }, [auctionRegistration, i18n.language]);
  useEffect(() => {
    if (auctionId)
      getAuction(auctionId)
        .then((auction) => {
          setAuction(auction);
        })
        .catch((error) => {
          console.error(error.message);
        });
  }, [auctionId]);

  return (
    <>
      <tr>
        <td>{auctionRegistration.auction?.id}</td>
        <td className="text-start">{auctionRegistration.auction?.name}</td>
        <td style={{ color: statusColor }}>
          {(auctionRegistration.auction?.state === 'FINISHED' && auctionRegistration.auction.lastPrice === null)
            ? (<span className="text-danger fw-bold">
              {t("Member.Phiên thất bại")}
            </span>)
            : (<StateAuctionView state={auction?.state ?? ""} />)}
        </td>
        <td className="fw-bold" style={{ color: statusColor }}>
          {status}
        </td>
        <td>
          <ViewBidHistoryModal
            auctionId={auctionId}
            userId={userId}
            auctionHistoryState={auctionHistoryState}
          />
          <Link to={`/tai-san-dau-gia/${auctionId}`}>
            <button className="ms-2 btn btn-warning btn-sm">
              {t("Member.Đếnphiênđấu")}
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default MyBidHistorySingle;
