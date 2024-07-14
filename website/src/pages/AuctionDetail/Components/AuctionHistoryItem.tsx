import { AuctionHistory } from "../../../models/AuctionHistory"
import React from "react"
import { formatNumber } from "../../../utils/formatNumber";
import { BidConfirmDelete, BidConfirmKickOut } from "../../MyAccount/Modal/Modal";
import { User } from "../../../models/User";
import Stomp from "stompjs";
import { Auction } from "../../../models/Auction";
import { formatDateStringAcceptNull } from "../../../utils/formatDateString";

interface AuctionHistoryItemProps {
    auction: Auction | null;
    auctionHistories: AuctionHistory[];
    stompClient: Stomp.Client | null;
    connected: boolean;
    staff: User | null;
    user: User | null;
}

export const AuctionHistoryItem: React.FC<AuctionHistoryItemProps> = ({ stompClient, connected, auctionHistories, auction, staff, user }) => {

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
                                <td className={`col-2 ${rowClassName}`}>{formatDateStringAcceptNull(auctionHistory.time ? auctionHistory.time : "")}</td>
                                <td className={`col-1 ${rowClassName}`}>{auctionHistory.bidCode}</td>
                                {
                                    auction?.state !== 'FINISHED' && staff?.username !== user?.username &&
                                    <td className={`col-1 text-center`}>
                                        {user?.id === auctionHistory.user.id && isFirstIndex &&
                                            <BidConfirmDelete stompClient={stompClient} connected={connected} user={user} auction={auctionHistory.auction} bidCode={auctionHistory.bidCode} />
                                        }
                                    </td>
                                }
                                {
                                    auction?.state !== 'FINISHED' && staff?.username === user?.username &&
                                    <td className={`col-1 text-center`}>
                                        {user?.id !== auctionHistory.user.id &&
                                            <BidConfirmKickOut stompClient={stompClient} connected={connected} user={auctionHistory.user} auction={auctionHistory.auction} bidCode={auctionHistory.bidCode} />
                                        }
                                    </td>
                                }
                            </tr>)
                    }
                ))
            }
        </tbody>
    )
}