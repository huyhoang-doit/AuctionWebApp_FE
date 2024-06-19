import React from "react";
import { useTranslation } from "react-i18next";

interface StateTransactionViewProps {
  state: string;
}

export const StateTransaction: React.FC<StateTransactionViewProps> = ({
  state,
}) => {
  const defaultView = <></>;
  const { t } = useTranslation(["Modal"]);
  const currentView = {
    SUCCEED: (
      <span className="text-success fw-bold">{t("Modal.Đã thanh toán")}</span>
    ),
    PENDING: (
      <span className="text-warning fw-bold">{t("Modal.Chưa thanh toán")}</span>
    ),
    FAILED: (
      <span className="text-danger fw-bold">{t("Modal.Hủy thanh toán")}</span>
    ),
  }[state];

  return currentView || defaultView;
};
