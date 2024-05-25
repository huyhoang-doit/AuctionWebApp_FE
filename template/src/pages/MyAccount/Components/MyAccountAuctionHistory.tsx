import { useEffect, useState } from "react";
import { AuctionHistory } from "../../../models/AuctionHistory";
import { getAuctionHistoriesByUsername } from "../../../api/AuctionHistoryAPI";
import { formatNumber } from "../../../utils/formatNumber";
import { formatDateString } from "../../../utils/formatDateString";
import { Error } from "../../Error-Loading/Error";
import { Loading } from "../../Error-Loading/Loading";

interface MyAccountAuctionHistoryProps {
    username: string | undefined;
}

export const MyAccountAuctionHistory: React.FC<MyAccountAuctionHistoryProps> = ({ username }) => {
    const [userAuctionHistories, setUserAuctionHistories] = useState<AuctionHistory[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (username) {
            setLoading(true);
            getAuctionHistoriesByUsername(username)
                .then((response) => {
                    setUserAuctionHistories(response.auctionHistoriesData);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [username]);

    if (loading) {
        <Loading/>
    }

    if (error) {
        <Error error={error} />
    }

    return (
        <div
            className="tab-pane fade"
            id="auction-activity"
            role="tabpanel"
            aria-labelledby="account-address-tab"
        >
            <div className="myaccount-orders">
                <h4 className="small-title">
                    Lịch sử tham gia đấu giá
                </h4>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th>Mã phiên</th>
                                <th>Thời gian</th>
                                <th>Số tiền</th>
                            </tr>
                            {
                                userAuctionHistories.map((auctionHistory, index) => (
                                    <tr key={index}>
                                        <td>
                                            <a
                                                className="account-order-id"
                                                href="javascript:void(0)"
                                            >
                                                {auctionHistory.id}
                                            </a>
                                        </td>
                                        <td>
                                            {formatDateString(auctionHistory.time ? auctionHistory.time : "")}
                                        </td>
                                        <td>
                                            {formatNumber(auctionHistory.priceGiven)} VNĐ
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}