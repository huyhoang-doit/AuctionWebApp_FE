import React, { useEffect, useState } from 'react'
import { Auction } from '../../../../models/Auction'
import { getAuctionByStaffId } from '../../../../api/AuctionAPI'
import { formatDateString } from '../../../../utils/formatDateString'
import { User } from '../../../../models/User'
import { Link } from 'react-router-dom'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import "../../../../utils/pagination.css"
import { Spinner } from 'react-bootstrap'
import { AssignAuctionModal } from '../../Modal/ModalStaff'
interface MyAccountDetailProps {
  user: User | null;
  setUser: (user: User) => void;
}
const AssignedAuctionList: React.FC<MyAccountDetailProps> = (props) => {
  const [auctions, setAuction] = useState<Auction[]>([]);
  const [user, setUser] = useState<User | null>(props.user);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  useEffect(() => {
    setLoading(true)
    if (props.user && props.user.id) {
      getAuctionByStaffId(props.user.id, page)
        .then((response) => {
          setAuction(response.auctionsData);
          setTotalElements(response.totalAuctions);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
    setLoading(false)
  }, [props.user, page]);

  return (
    <div
      className="tab-pane fade"
      id="auction-job"
      role="tabpanel"
      aria-labelledby="account-address-tab"
    >
      <div className="myaccount-orders">
        <h4 className="small-title">
          Danh sách phiên được phân công
        </h4>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Mã phiên</th>
                <th>Tên phiên</th>
                <th>Thời gian bắt đầu</th>
                <th>Trạng thái</th>
                <th>Xem chi tiết</th>
              </tr>
            </thead>
            <tbody>{loading ? (
              <tr>
                <td colSpan={6} className="text-center">
                  <Spinner animation="border" />
                </td>
              </tr>

            ) : (auctions.length > 0 ? (auctions.map((auction) => (
              <tr key={auction.id}>
                <td>
                  {auction.id}
                </td>
                <td>{auction.name}</td>
                <td>{formatDateString(auction.startDate)}</td>
                <td>
                  <span className={`fw-bold ${auction.state === 'WAITING' ? 'text-warning' : auction.state === 'ONGOING' ? 'text-success' : ''}`}>
                    {auction.state}
                  </span>
                </td>
                <td>
                  <AssignAuctionModal auction={auction} />
                  <Link to={`/tai-san-dau-gia/${auction.id}`} className='ms-2 btn btn-warning btn-sm'>
                    Đến
                  </Link>
                </td>
              </tr>
            ))) : (<td colSpan={6} className="text-center">
              <h5 className='fw-semibold lh-base mt-2'>Hiện tại chưa có phiên nào được phân công</h5>
            </td>))}
            </tbody>
          </table>
          <div className="mt-4">
            <PaginationControl
              page={page}
              between={5}
              total={totalElements}
              limit={5}
              changePage={(page) => {
                setPage(page);
              }}
              ellipsis={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AssignedAuctionList
