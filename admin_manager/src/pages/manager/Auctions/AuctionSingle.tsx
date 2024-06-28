import React from 'react'
import { Auction } from '../../../models/Auction'
import { formatDateString } from '../../../utils/formatDateString'
import { AuctionModal } from '../Modal/Modal'
import { getAuctionStatusStyle } from '../../../utils/cssStyle'
import { StateAuction } from './StateAuction'
interface AuctionSingleProps {
  auction: Auction
}
const AuctionSingle: React.FC<AuctionSingleProps> = ({ auction }) => {
  return (
    <>
      <tr >

        <td>{auction.id}</td>
        <td className='text-start'>{auction.name}</td>
        <td>{formatDateString(auction.startDate)}</td>
        <td>{formatDateString(auction.endDate)}</td>
        <td>
          {auction.user?.fullName}
        </td>
        <td style={getAuctionStatusStyle(auction.state)}>
          <StateAuction state={auction.state} />
        </td>
        <td>
          <AuctionModal auction={auction} />
        </td>
      </tr>
    </>
  )
}

export default AuctionSingle
