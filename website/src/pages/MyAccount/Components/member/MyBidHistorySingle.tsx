import React, { useEffect, useState } from 'react'
import { AuctionRegistration } from '../../../../models/AuctionRegistration';
import { Auction } from '../../../../models/Auction';
import { getWinnerByAuctionId } from '../../../../api/UserAPI';
import { getAuction } from '../../../../api/AuctionAPI';
import { StateAuctionView } from '../../../AuctionList/Components/StateAuctionView';
import { Link } from 'react-router-dom';
import { ViewBidHistoryModal } from '../../Modal/Modal';
interface MyBidHistorySingleProps {
  auctionRegistration: AuctionRegistration;
}

const MyBidHistorySingle: React.FC<MyBidHistorySingleProps> = ({ auctionRegistration }) => {
  const [status, setStatus] = useState('');
  const [statusColor, setStatusColor] = useState('');
  const [auctionId, setAuctionId] = useState(auctionRegistration.auction?.id);
  const [auction, setAuction] = useState<Auction | null>(null);
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
                setStatus('Thắng phiên');
                setStatusColor('#198754');
              } else {
                setStatus('Thất bại');
                setStatusColor('red');
              }
            }
          } catch (error) {
            console.error("Error fetching winner:", error);
          }
          break;

        default:
          setStatus('Chưa xác định');
          setStatusColor('black');
          break;
      }
    };

    if (auctionRegistration.state === 'KICKED_OUT') {
      setStatus('Rút lui');
      setStatusColor('#b41712');
      setAuctionHistoryState('HIDDEN')
    } else {
      fetchWinner()
    }
  }, [auctionRegistration]);

  useEffect(() => {
    if (auctionId)
      getAuction(auctionId)
        .then((auction) => {
          setAuction(auction);
        })
        .catch((error) => {
          console.error(error.message);
        });
  }, [auctionId])

  return (
    <>
      <tr>
        <td>
          {auctionRegistration.auction?.id}
        </td>
        <td className="text-start">
          {auctionRegistration.auction?.name}
        </td>
        <td style={{ color: statusColor }}>
          <StateAuctionView state={auction?.state ?? ""} />
        </td>
        <td className='fw-bold' style={{ color: statusColor }}>
          {status}
        </td>
        <td>
          <ViewBidHistoryModal auctionId={auctionId} userId={userId} auctionHistoryState={auctionHistoryState} />
          <Link to={`/tai-san-dau-gia/${auctionId}`} >
            <button className='ms-2 btn btn-warning btn-sm'>
              Đến phiên đấu
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
}

export default MyBidHistorySingle;

