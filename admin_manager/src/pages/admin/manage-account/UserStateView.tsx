import React from 'react';

interface UserStateViewProps {
    state: string;
}

export const UserStateView: React.FC<UserStateViewProps> = ({ state }) => {
    const defaultView = <></>;

    const currentView = {
        VERIFIED: <span className="fw-bold">
            Đã xác thực
        </span>,
        ACTIVE: <span className="fw-bold" >
            Đã kích hoạt
        </span>,
        INACTIVE: <span className="fw-bold" >
            Chưa kích hoạt
        </span>,
        DISABLE: <span className="fw-bold" >
            Vô hiệu hóa
        </span>,
    }[state];

    return currentView || defaultView;
}
