import React, { useEffect, useState } from 'react'
import { Image } from '../../../../models/Image'
import { getIconImageByJewelryId, getImagesByJewelryId } from '../../../../api/ImageApi'
import { Jewelry } from '../../../../models/Jewelry';
import { User } from '../../../../models/User';
import { Link } from 'react-router-dom';
import { Auction } from '../../../../models/Auction';
import { formatNumberAcceptNull } from '../../../../utils/formatNumber';
import { AuctionHistory } from '../../../../models/AuctionHistory';
import { getAuctionHistoriesWhenFinished } from '../../../../api/AuctionHistoryAPI';
type JewelryHandOverSingleProps = {
  jewelry: Jewelry;
  user: User | null
}
const JewelryHandOverSingle: React.FC<JewelryHandOverSingleProps> = ({ jewelry, user }) => {
  const [image, setImage] = useState<Image | null>(null)
  const [images, setImages] = useState<Image[]>([])
  const [auction, setAuction] = useState<Auction>()
  const [winner, setWinner] = useState<User>()
  const [auctions, setAuctions] = useState<Auction[]>([])
  const [auctionHistories, setAuctionHistories] = useState<AuctionHistory[]>([])


  const getWinnerOfAuction = (auctionId: number | undefined) => {
    getAuctionHistoriesWhenFinished(auctionId)
      .then((response) => {
        setAuctionHistories(response.auctionHistoriesData);
        const lastAuctionHistory = auctionHistories.pop();
        setWinner(lastAuctionHistory?.user)
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  useEffect(() => {
    getAuctionByJewelryId(jewelry.id)
      .then((response) => {
        setAuctions(response.auctionsData);
        const lastAuction: Auction | undefined = response.auctionsData.pop()
        setAuction(lastAuction)

      })
      .catch((error) => {
        console.error(error.message);
      });

    getIconImageByJewelryId(jewelry.id)
      .then((response) => {
        setImage(response);
      })
      .catch((error) => {
        console.error(error.message);
      });

    getImagesByJewelryId(jewelry.id)
      .then((response) => {
        setImages(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [])

  return (
    <>
      <tr>
        <td>
          <Link
            className="account-order-id"
            to={""}
          >
            {jewelry.id}
          </Link>
        </td>
        <td>
          {jewelry.name}
        </td>
        <td>{auction?.id}</td>
        <td>
          {formatNumberAcceptNull(auction?.lastPrice)}
        </td>
        <td>
          {winner?.firstName}...
        </td>
        <td>
          {/* <JewelryModal jewelry={jewelry} images={images} user={user} /> */}
          {/* <DeleteJewelryModal jewelry={jewelry} notification={notification} setNotification={setNotification} /> */}
        </td>
      </tr>
    </>
  )
}

export default JewelryHandOverSingle
