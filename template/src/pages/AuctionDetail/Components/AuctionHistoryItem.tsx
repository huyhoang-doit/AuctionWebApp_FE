import { AuctionHistory } from "../../../models/AuctionHistory"
import React from "react"
import { formatNumber } from "../../../utils/formatNumber";
import { formatDateString } from "../../../utils/formatDateString";

interface AuctionHistoryItem {
    auctionHistories: AuctionHistory[];
}

export const AuctionHistoryItem: React.FC<AuctionHistoryItem> = (props) => {
    const auctionHistories: AuctionHistory[] = props.auctionHistories;
    return (
        <tbody>
            {
                React.Children.toArray(auctionHistories.map(
                    (auctionHistory, index) => {
                        const isFirstIndex = index === 0;
                        const rowClassName = isFirstIndex ? 'text-danger fw-bold' : '';
                        return (
                            <tr>
                                <td className={`col-4 ${rowClassName}`}>
                                    {auctionHistory.user.fullName}
                                </td>
                                <td className={`col-4 ${rowClassName}`}>{formatNumber(auctionHistory.priceGiven)} VNĐ</td>
                                <td className={`col-4 ${rowClassName}`}>{formatDateString(auctionHistory.time ? auctionHistory.time : "")}</td>
                            </tr>)
                    }
                ))
            }
        </tbody>
    )
}