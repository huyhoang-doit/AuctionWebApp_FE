import React from "react";
import { useTranslation } from "react-i18next";

interface StateTransactionProps {
  type: string;
}

export const TypeTransaction: React.FC<StateTransactionProps> = ({ type }) => {
  const defaultView = <></>;
  const { t } = useTranslation(["Modal"]);

  const currentView = {
    REGISTRATION: (
      <span className="fw-bold"> {t("Modal.Đăng kí tham gia phiên")}</span>
    ),
    REFUND: (
      <span className="fw-bold">
        {t("Modal.Hoàn tiền đăng kí tham gia phiên")}
      </span>
    ),
    PAYMENT_TO_SELLER: (
      <span className="fw-bold">
        {t("Modal.Thanh toán cho người gửi sản phẩm đấu giá")}
      </span>
    ),
    PAYMENT_TO_WINNER: (
      <span className="fw-bold">
        {" "}
        {t("Modal.Thanh toán cho người thắng phiên")}
      </span>
    ),
  }[type];

  return currentView || defaultView;
};
