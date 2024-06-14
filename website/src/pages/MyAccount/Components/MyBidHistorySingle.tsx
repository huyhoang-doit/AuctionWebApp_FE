import React, { useEffect, useState } from 'react'
import { AuctionRegistration } from '../../../models/AuctionRegistration';
import { getWinnerByAuctionId } from '../../../api/UserAPI';
import { ViewBidHistoryModal } from '../Modal/Modal';
import { Link } from 'react-router-dom';
interface MyBidHistorySingleProps {
  auctionRegistration: AuctionRegistration;
}

const MyBidHistorySingle: React.FC<MyBidHistorySingleProps> = ({ auctionRegistration }) => {
  const [status, setStatus] = useState('');
  const [statusColor, setStatusColor] = useState('');
  const [auctionId, setAuctionId] = useState(auctionRegistration.auction?.id);
  const [userId, setUserId] = useState(auctionRegistration.user?.id);
  const [auctionHistoryState, setAuctionHistoryState] = useState('ACTIVE');

  useEffect(() => {
    const fetchWinner = async () => {
      const auctionState = auctionRegistration?.auction?.state;

      switch (auctionState) {
        case 'FINISHED':
          try {
            const winnerData = await getWinnerByAuctionId(auctionRegistration?.auction?.id);
            if (winnerData) {
              if (winnerData.id === auctionRegistration?.user?.id) {
                setStatus('Thành công');
                setStatusColor('#06D001');
              } else {
                setStatus('Thất bại');
                setStatusColor('red');
              }
            }
          } catch (error) {
            console.error("Error fetching winner:", error);
          }
          break;

        case 'WAITING':
          setStatus('Chưa diễn ra');
          setStatusColor('black');
          break;

        case 'PAUSED':
          setStatus('Phiên tạm dừng');
          setStatusColor('black');
          break;

        case 'DELETED':
          setStatus('Phiên đã hủy');
          setStatusColor('#b41712');
          break;

        default:
          setStatus('Đang diễn ra');
          setStatusColor('#059212');
          break;
      }
    };
    console.log('state:', auctionRegistration.state);

    if (auctionRegistration.state === 'KICKED_OUT') {
      setStatus('Rút lui');
      setStatusColor('#b41712');
      setAuctionHistoryState('HIDDEN')
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
          <ViewBidHistoryModal auctionId={auctionId} userId={userId} auctionHistoryState={auctionHistoryState} />
          <Link to={`/tai-san-dau-gia/${auctionId}`} className='ms-2 btn btn-warning btn-sm'>
            Đến phiên đấu
          </Link>
        </td>
      </tr>
    </>
  );
}

export default MyBidHistorySingle;

