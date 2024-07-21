import React from "react";

interface PaymentMethodProps {
  method: string;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ method }) => {
  const defaultView = <></>;

  const currentView = {
    PAY_AT_COUNTER: <span className="fw-bold">Thanh toán tại quầy</span>,
    BANKING: <span className="fw-bold">Chuyển khoản</span>,
    "": <span className="fw-bold text-warning">Chưa xác định</span>
  }[method];

  return currentView || defaultView;
};
