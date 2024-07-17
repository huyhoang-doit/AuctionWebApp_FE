import React from 'react';

interface JewelryMaterialViewProps {
    material: string;
}

export const JewelryMaterialView: React.FC<JewelryMaterialViewProps> = ({ material }) => {
    const defaultView = <></>;

    const currentView = {
        SILVER: <span className="fw-bold">
            Đã xác thực
        </span>,
        GOLD: <span className="fw-bold" >
            Vàng
        </span>,
        PLATINUM: <span className="fw-bold" >
            Bạch kim
        </span>,
        DIAMOND: <span className="fw-bold" >
            Kim cương
        </span>,
    }[material];

    return currentView || defaultView;
}
