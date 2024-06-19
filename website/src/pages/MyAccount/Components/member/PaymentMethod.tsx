import React from "react";
import { useTranslation } from "react-i18next";

interface PaymentMethodProps {
  method: string;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ method }) => {
  const defaultView = <></>;
  const { t } = useTranslation(["Modal"]);

  const currentView = {
    PAY_AT_COUNTER: (
      <span className="fw-bold">{t("Modal.Thanh toán tại quầy")}</span>
    ),
    BANKING: <span className="fw-bold">{t("Modal.Chuyển khoản")}</span>,
  }[method];

  return currentView || defaultView;
};
