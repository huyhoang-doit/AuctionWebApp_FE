import { useEffect, useState } from "react";
import { Error } from "../../Error-Loading/Error";
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { Spinner } from "react-bootstrap";
import { getAuctionRegistrationByUserId } from "../../../api/AuctionRegistrationAPI";
import { AuctionRegistration } from "../../../models/AuctionRegistration";
import { User } from "../../../models/User";
import MyBidHistorySingle from "./MyBidHistorySingle";

interface MyBidHistoryListProps {
    user: User | null;
}

export const MyBidHistoryList: React.FC<MyBidHistoryListProps> = ({ user }) => {
    const [userAuctionRegistration, setUserAuctionRegistration] = useState<AuctionRegistration[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [totalElements, setTotalElements] = useState(0);


    useEffect(() => {
        setLoading(true);
        if (user) {
            setLoading(true);
            getAuctionRegistrationByUserId(user.id, page)
                .then((response) => {
                    setUserAuctionRegistration(response.auctionRegistrationsData);
                    setTotalElements(response.totalElements)
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        }
        setLoading(false);

    }, [user, page]);



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
                        <thead>
                            <tr>
                                <th>Mã phiên</th>
                                <th style={{width: "200px"}}>Tên phiên</th>
                                <th>Trạng thái</th>
                                <th>Kết quả</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="text-center">
                                        <Spinner animation="border" />
                                    </td>
                                </tr>
                            ) : (userAuctionRegistration.length > 0 ? (userAuctionRegistration.map((auctionRegistration, index) => (
                                <MyBidHistorySingle key={index} auctionRegistration={auctionRegistration} />
                            ))) : (
                                <tr>
                                    <td colSpan={4} className="text-center">
                                        <h5 className='fw-semibold lh-base mt-2'>Chưa có đấu giá nào </h5>
                                    </td>
                                </tr>)
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