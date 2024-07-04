import React from 'react';

interface LiStateTransactionViewProps {
    state: string;
}

export const LiStateTransaction: React.FC<LiStateTransactionViewProps> = ({ state }) => {
    const defaultView = <></>;

    const currentView = {
        SUCCEED: "Đã thanh toán",
        PENDING: "Chưa thanh toán",
        FAILED: "Hủy thanh toán",
    }[state];

    return currentView || defaultView;
};
