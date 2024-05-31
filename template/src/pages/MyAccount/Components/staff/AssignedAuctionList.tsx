import React, { useEffect, useState } from 'react'
import { AssignAuctionModal } from '../../Modal/Modal'
import { Auction } from '../../../../models/Auction'
import { getAuctionByStaffId } from '../../../../api/AuctionAPI'
import { formatDateString } from '../../../../utils/formatDateString'
import { User } from '../../../../models/User'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
interface MyAccountDetailProps {
  user: User | null;
  setUser: (user: User) => void;
}
const AssignedAuctionList: React.FC<MyAccountDetailProps> = (props) => {
  const [auctions, setAuction] = useState<Auction[]>([])
  const [user, setUser] = useState<User | null>(props.user);
  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  useEffect(() => {
    if (props.user && props.user.id) {
      getAuctionByStaffId(props.user.id)
        .then((response) => {
          setAuction(response.auctionsData);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [props.user])


  return (
    <><div
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
            <tbody>
              <tr>
                <th>Mã phiên</th>
                <th>Tên phiên</th>
                <th>Thời gian bắt đầu</th>
                <th>Trạng thái</th>
                <th>Xem chi tiết</th>
              </tr>
              {auctions.map((auction) => (
                <tr key={auction.name}>
                  <td>
                    <a
                      className="account-order-id"
                      href="javascript:void(0)"
                    >
                      {auction.id}
                    </a>
                  </td>
                  <td>
                    {auction.name}
                  </td>
                  <td>{formatDateString(auction.startDate)}</td>
                  <td>
                    <span className='fw-bold'>
                      {auction.state}
                    </span>
                  </td>
                  <td>
                    <AssignAuctionModal auction={auction} />
                    <Link to={"/tai-san-dau-gia/" + auction.id} className='ms-2 btn btn-warning btn-sm'>
                      Đến
                    </Link>
                  </td>
                </tr>
              )
              )}

            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default AssignedAuctionList
