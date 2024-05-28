import React, { useEffect, useState } from 'react'
import { AssignAuctionModal } from '../../Modal/Modal'
import { Auction } from '../../../../models/Auction'
import { getAuctionByStaffId } from '../../../../api/AuctionAPI'
import { formatDateString } from '../../../../utils/formatDateString'
import { User } from '../../../../models/User'
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


  console.log(auctions)
  return (
    <>
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
                  </td>
                </tr>
              )
              )}

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AssignedAuctionList
