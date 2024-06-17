import React from 'react';

interface StateAuctionViewProps {
  state: string;
}

export const StateAuction: React.FC<StateAuctionViewProps> = ({ state }) => {
  const defaultView = <></>;

  const currentView = {
    ONGOING: <span className="text-success fw-bold">Đang diễn ra</span>,
    WAITING: <span className="text-warning fw-bold">Sắp diễn ra</span>,
    FINISHED: <span className="text-danger fw-bold">Đã kết thúc</span>,
    PAUSED: <span className="text-danger fw-bold">Tạm dừng</span>,
    DELETED: <span className="text-danger fw-bold">Đã xóa</span>,
  }[state];

  return currentView || defaultView;
};
