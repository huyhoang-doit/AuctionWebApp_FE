import { useEffect, useState } from "react";
import { AuctionHistory } from "../../../models/AuctionHistory";
import { getBidByUsername } from "../../../api/AuctionHistoryAPI";
import { formatNumber } from "../../../utils/formatNumber";
import { formatDateString } from "../../../utils/formatDateString";
import { Error } from "../../Error-Loading/Error";
import { Loading } from "../../Error-Loading/Loading";
import { PaginationControl } from 'react-bootstrap-pagination-control';

interface MyBidHistoryProps {
    username: string | undefined;
}

export const MyBidHistory: React.FC<MyBidHistoryProps> = ({ username }) => {
    const [userAuctionHistories, setUserAuctionHistories] = useState<AuctionHistory[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1)
    const [totalElements, setTotalElements] = useState(0)

    useEffect(() => {
        if (username) {
            setLoading(true);
            getBidByUsername(username, page)
                .then((response) => {
                    setUserAuctionHistories(response.auctionHistoriesData);
                    setTotalElements(response.totalElements)
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [username, page]);

    if (loading) {
        <Loading />
    }

    if (error) {
        <Error error={error} />
    }

    return (
        <div
            className="tab-pane fade"
            id="bid-activity"
            role="tabpanel"
            aria-labelledby="account-address-tab"
        >
            <h4 className="small-title mb-4 fw-bold">
                Đấu giá của tôi
            </h4>
            <div className="myaccount-orders">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <th>Mã phiên</th>
                                <th>Tên phiên</th>
                                <th>Thời gian</th>
                                <th>Số tiền (VNĐ)</th>
                            </tr>
                            {
                                userAuctionHistories.map((auctionHistory, index) => (
                                    <tr key={index}>
                                        <td>
                                            {auctionHistory.auction?.id}
                                        </td>
                                        <td>
                                            {auctionHistory.auction?.name}
                                        </td>
                                        <td>
                                            {formatDateString(auctionHistory.time ? auctionHistory.time : "")}
                                        </td>
                                        <td>
                                            {formatNumber(auctionHistory.priceGiven)}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-4">
                <PaginationControl
                    page={page}
                    between={3}
                    total={totalElements}
                    limit={10}
                    changePage={(page) => {
                        setPage(page)
                    }}
                    ellipsis={1}
                />
            </div>
        </div>
    )
}