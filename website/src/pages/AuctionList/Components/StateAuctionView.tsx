import React from 'react';

interface StateAuctionViewProps {
    state: string;
}

export const StateAuctionView: React.FC<StateAuctionViewProps> = ({ state }) => {
    let currentView: JSX.Element;

    switch (state) {
        case 'ONGOING':
            currentView = (
                <span className="text-success fw-bold">
                    Đang diễn ra
                </span>
            );
            break;
        case 'WAITING':
            currentView = (
                <span className="text-warning fw-bold">
                    Sắp diễn ra
                </span>
            );
            break;
        case 'FINISHED':
            currentView = (
                <span className="text-danger fw-bold">
                    Đã kết thúc
                </span>
            );
            break;
        case 'PAUSED':
            currentView = (
                <span className="text-warning fw-bold">
                    Tạm dừng
                </span>
            );
            break;
        case 'DELETED':
            currentView = (
                <span className="text-warning fw-bold">
                    Đã xóa
                </span>
            );
            break;
        default:
            currentView = (
                <span className="text-warning fw-bold">
                    Unknown state
                </span>
            );
    }

    return currentView;
};
