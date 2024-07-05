import React from 'react';

interface StateAuctionViewProps {
  state: string;
}

export const LiStateAuction: React.FC<StateAuctionViewProps> = ({ state }) => {
  const defaultView = <></>;

  const currentView = {
    ONGOING: "Đang diễn ra",
    WAITING: "Sắp diễn ra",
    FINISHED: "Đã kết thúc",
    PAUSED: "Tạm dừng",
    DELETED: "Đã xóa",
  }[state];

  return currentView || defaultView;
};
