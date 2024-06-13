import { useEffect, useState } from "react";
import { AuctionHistory } from "../../../models/AuctionHistory";
import { getBidByUsername } from "../../../api/AuctionHistoryAPI";
import { formatNumber } from "../../../utils/formatNumber";
import { formatDateString } from "../../../utils/formatDateString";
import { Error } from "../../Error-Loading/Error";
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { Spinner } from "react-bootstrap";

interface MyBidHistoryProps {
    username: string | undefined;
}

export const MyBidHistory: React.FC<MyBidHistoryProps> = ({ username }) => {
    const [userAuctionHistories, setUserAuctionHistories] = useState<AuctionHistory[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [totalElements, setTotalElements] = useState(0);


    useEffect(() => {
        setLoading(true);
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
        setLoading(false);

    }, [username, page]);



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
                                <th  className="text-start">Mã phiên</th>
                                <th  className="text-start">Tên phiên</th>
                                <th  className="text-start">Thời gian</th>
                                <th  className="text-start">Số tiền (VNĐ)</th>
                            </tr>{loading ? (<tr>
                                <td colSpan={4} className="text-center">
                                    <Spinner animation="border" />
                                </td>
                            </tr>
                            ) : (userAuctionHistories.length > 0 ? (userAuctionHistories.map((auctionHistory, index) => (
                                <tr key={index}>
                                    <td  className="text-start">
                                        {auctionHistory.auction?.id}
                                    </td>
                                    <td  className="text-start">
                                        {auctionHistory.auction?.name}
                                    </td>
                                    <td  className="text-start">
                                        {formatDateString(auctionHistory.time ? auctionHistory.time : "")}
                                    </td>
                                    <td  className="text-start">
                                        {formatNumber(auctionHistory.priceGiven)}
                                    </td>
                                </tr>
                            ))) : (<td colSpan={4} className="text-center">
                                <h5 className='fw-semibold lh-base mt-2'>Chưa có đấu giá nào </h5>
                            </td>)
                            )}

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