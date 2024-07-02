import React from "react";
import { useTranslation } from "react-i18next";

interface StateJewelryViewProps {
  state: string;
}

export const StateJewelry: React.FC<StateJewelryViewProps> = ({ state }) => {
  const defaultView = <></>;
  const { t } = useTranslation(["Components"]);

  const currentView = {
    ACTIVE: (
      <span className="text-success fw-bold">
        {t("StateJewelry.Chưa có phiên đấu")}
      </span>
    ),
    AUCTION: (
      <span className="text-warning fw-bold">
        {t("StateJewelry.Đã có phiên đấu")}
      </span>
    ),
  }[state];

  return currentView || defaultView;
};
