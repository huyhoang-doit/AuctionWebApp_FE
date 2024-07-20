import React from 'react';

interface JewelryStateViewrops {
    state: string;
}

export const JewelryStateView: React.FC<JewelryStateViewrops> = ({ state }) => {
    const defaultView = <></>;

    const currentView = {
        APPROVING: 'Đang chờ duyệt',
        ACTIVE: 'Đã duyệt',
        AUCTION: 'Đang đấu giá',
        HANDED_OVER: 'Đã bàn giao',
    }[state];

    return currentView || defaultView;
}
