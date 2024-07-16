import React from "react";
import { useTranslation } from "react-i18next";

interface StateAuctionViewProps {
  state: string;
}

export const StateAuctionView: React.FC<StateAuctionViewProps> = ({
  state,
}) => {
  let currentView: JSX.Element;
  const { t } = useTranslation(["Components"]);
  switch (state) {
    case "ONGOING":
      currentView = (
        <span className="text-success fw-bold">
          {t("StateAuctionView.Đang diễn ra")}
        </span>
      );
      break;
    case "WAITING":
      currentView = (
        <span className="fw-bold ani-fire">
          {t("StateAuctionView.Sắp diễn ra")}
        </span>
      );
      break;
    case "FINISHED":
      currentView = (
        <span className="text-danger fw-bold">
          {t("StateAuctionView.Đã kết thúc")}
        </span>
      );
      break;
    case "PAUSED":
      currentView = (
        <span className="text-warning fw-bold">
          {t("StateAuctionView.Tạm dừng")}
        </span>
      );
      break;
    case "DELETED":
      currentView = (
        <span className="text-warning fw-bold">
          {t("StateAuctionView.Đã xóa")}
        </span>
      );
      break;
    default:
      currentView = <span className="text-warning fw-bold">Unknown state</span>;
  }

  return currentView;
};
