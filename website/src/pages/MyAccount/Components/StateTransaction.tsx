import React from 'react';

interface StateTransactionViewProps {
    state: string;
}

export const StateTransaction: React.FC<StateTransactionViewProps> = ({ state }) => {
    const defaultView = <></>;

    const currentView = {
        SUCCEED: <span className="text-success fw-bold">Thành công</span>,
        FAILED: <span className="text-danger fw-bold">Không thành công</span>,
    }[state];

    return currentView || defaultView;
};
