import React from 'react';

interface InfoBlockProps {
    label: string;
    value: string | number;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({ label, value }) => {
    return (
        <>
            <div className="col-6 col-xs-6">
                <b className="spanauctionproperty">{label}</b>
            </div>
            <div className="col-6 col-xs-6 right-info-text no-margin" style={{ color: "#b41712" }}>
                <span className="fw-bold spanColorAuctionproperty novaticPrice">{value === '0' ? "Không có người thắng phiên" : value}</span>
                <span className="fw-bold spanColorAuctionproperty">{value === '0' ? "" : " VNĐ"} </span>
            </div>
        </>
    )
};
