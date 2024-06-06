import { AuctionHistory } from "../../../models/AuctionHistory"
import React, { useContext } from "react"
import { formatNumber } from "../../../utils/formatNumber";
import { formatDateString } from "../../../utils/formatDateString";
import { UserContext } from "../../../hooks/useContext";
import { BidConfirmDelete } from "../../MyAccount/Modal/Modal";
import { User } from "../../../models/User";

interface AuctionHistoryItemProps {
    auctionHistories: AuctionHistory[];
}

export const AuctionHistoryItem: React.FC<AuctionHistoryItemProps> = ({auctionHistories}) => {
    const context = useContext(UserContext);
    let user: User | null = null;
    
    if (context) {
        user = context.user;
    }

    return (
        <tbody>
            {
                React.Children.toArray(auctionHistories.map(
                    (auctionHistory, index) => {
                        const isFirstIndex = index === 0;
                        
                        const rowClassName = isFirstIndex ? 'text-danger fw-bold' : '';
                        return (
                            <tr>
                                <td className={`col-1 ${rowClassName}`}>
                                    {auctionHistory.id}
                                </td>
                                <td className={`col-3 ${rowClassName}`}>
                                    {auctionHistory.user.fullName}
                                </td>
                                <td className={`col-2 ${rowClassName}`}>
                                    {isFirstIndex ? "Trả giá cao nhất" : "Trả giá thấp hơn"}
                                </td>
                                <td className={`col-2 ${rowClassName}`}>{formatNumber(auctionHistory.priceGiven)} VNĐ</td>
                                <td className={`col-2 ${rowClassName}`}>{formatDateString(auctionHistory.time ? auctionHistory.time : "")}</td>
                                <td className={`col-1 ${rowClassName}`}>{auctionHistory.bidCode}</td>
                                <td className={`col-1 text-center`}>
                                    {user?.id === auctionHistory.user.id && isFirstIndex &&
                                        <BidConfirmDelete user={user} auction={auctionHistory.auction} bidCode={auctionHistory.bidCode} />
                                    }
                                </td>
                            </tr>)
                    }
                ))
            }
        </tbody>
    )
}