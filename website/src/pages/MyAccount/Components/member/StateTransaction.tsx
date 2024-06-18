import React from 'react';

interface StateTransactionViewProps {
    state: string;
}

export const StateTransaction: React.FC<StateTransactionViewProps> = ({ state }) => {
    const defaultView = <></>;

    const currentView = {
        SUCCEED: <span className="text-success fw-bold">Đã thanh toán</span>,
        PENDING: <span className="text-warning fw-bold">Chưa thanh toán...</span>,
        FAILED: <span className="text-danger fw-bold">Hủy thanh toán</span>,
    }[state];

    return currentView || defaultView;
};
