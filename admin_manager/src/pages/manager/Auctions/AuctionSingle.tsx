import React from 'react'
import { Auction } from '../../../models/Auction'
import { formatDateString } from '../../../utils/formatDateString'
import { AuctionModal } from '../Modal/Modal'
interface AuctionSingleProps {
  auction: Auction
}
const AuctionSingle: React.FC<AuctionSingleProps> = ({ auction }) => {
  return (
    <>
      <tr >

        <td>{auction.id}</td>
        <td>{auction.name}</td>
        <td>{formatDateString(auction.startDate)}</td>
        <td>{formatDateString(auction.endDate)}</td>
        <td>
          {auction.user?.id}
        </td>
        <td>
          {auction.state}
        </td>
        <td>
          <AuctionModal auction={auction} />
        </td>
      </tr>
    </>
  )
}

export default AuctionSingle