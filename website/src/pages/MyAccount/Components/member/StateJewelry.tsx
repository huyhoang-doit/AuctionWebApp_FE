import React from "react";

interface StateJewelryViewProps {
  state: string;
}

export const StateJewelry: React.FC<StateJewelryViewProps> = ({
  state,
}) => {
  const defaultView = <></>;
  const currentView = {
    ACTIVE: (
      <span className="text-success fw-bold">Chưa có phiên đấu</span>
    ),
    AUCTION: (
      <span className="text-warning fw-bold">Đã có phiên đấu</span>
    )
  }[state];

  return currentView || defaultView;
};
