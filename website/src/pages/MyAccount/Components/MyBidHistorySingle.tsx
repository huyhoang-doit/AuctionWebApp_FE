import React, { useEffect, useState } from 'react'
import { AuctionRegistration } from '../../../models/AuctionRegistration';
import { getWinnerByAuctionId } from '../../../api/UserAPI';
import { ViewBidHistoryModal } from '../Modal/Modal';
interface MyBidHistorySingleProps {
  auctionRegistration: AuctionRegistration;
}

const MyBidHistorySingle: React.FC<MyBidHistorySingleProps> = ({ auctionRegistration }) => {
  const [status, setStatus] = useState('');
  const [statusColor, setStatusColor] = useState('');
  const [auctionId, setAuctionId] = useState(auctionRegistration.auction?.id);
  const [userId, setUserId] = useState(auctionRegistration.user?.id);

  useEffect(() => {
    const fetchWinner = async () => {
      if (auctionRegistration?.auction?.state === 'FINISHED') {
        try {
          const winnerData = await getWinnerByAuctionId(auctionRegistration.auction.id);
          if (winnerData) {
            if (winnerData.id === auctionRegistration?.user?.id) {
              setStatus('Thành công');
              setStatusColor('green');
            } else {
              setStatus('Thất bại');
              setStatusColor('red');
            }
          }
        } catch (error) {
          console.error("Error fetching winner:", error);
        }
      } else if (auctionRegistration?.auction?.state === 'WAITING') {
        setStatus('Chưa diễn ra');
        setStatusColor('black');
      } else {
        setStatus('Đang diễn ra');
        setStatusColor('#fed100');
      }
    };

    if (auctionRegistration.state === 'KICKED_OUT') {
      setStatus('Rút lui');
      setStatusColor('red');
    } else {
      fetchWinner()
    }
  }, [auctionRegistration]);

  return (
    <>
      <tr>
        <td>
          {auctionRegistration.auction?.id}
        </td>
        <td>
          {auctionRegistration.auction?.name}
        </td>
        <td className='fw-semibold' style={{ color: statusColor }}>
          {status}
        </td>
        <td>
          <ViewBidHistoryModal auctionId={auctionId} userId={userId} />
        </td>
      </tr>
    </>
  );
}

export default MyBidHistorySingle;

