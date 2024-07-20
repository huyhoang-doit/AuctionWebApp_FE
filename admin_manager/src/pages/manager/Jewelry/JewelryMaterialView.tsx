import React from 'react';

interface JewelryMaterialViewProps {
    material: string;
}

export const JewelryMaterialView: React.FC<JewelryMaterialViewProps> = ({ material }) => {
    const defaultView = <></>;

    const currentView = {
        SILVER: 'Bạc',
        GOLD: 'Vàng',
        PLATINUM: 'Bạch kim',
        DIAMOND: 'Kim cương',
    }[material];

    return currentView || defaultView;
}
