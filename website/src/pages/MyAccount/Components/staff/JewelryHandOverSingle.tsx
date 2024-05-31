import React, { useEffect, useState } from 'react'
import { Image } from '../../../../models/Image'
import { Jewelry } from '../../../../models/Jewelry';
import { User } from '../../../../models/User';
import { Link } from 'react-router-dom';
import { Auction } from '../../../../models/Auction';
import { formatNumberAcceptNull } from '../../../../utils/formatNumber';
import { AuctionHistory } from '../../../../models/AuctionHistory';
import { getAuctionByJewelryId } from '../../../../api/AuctionAPI';
import { getWinnerByAuctionId } from '../../../../api/UserAPI';
import { getImagesByJewelryId } from '../../../../api/ImageApi';
import { JewelryHanOverModal } from '../../Modal/Modal';
type JewelryHandOverSingleProps = {
  jewelry: Jewelry;
  user: User | null
}
const JewelryHandOverSingle: React.FC<JewelryHandOverSingleProps> = ({ jewelry, user }) => {
  const [image, setImage] = useState<Image | null>(null);
  const [images, setImages] = useState<Image[]>([]);
  const [auction, setAuction] = useState<Auction | null>(null);
  const [winner, setWinner] = useState<User | null>(null);
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const [auctionHistories, setAuctionHistories] = useState<AuctionHistory[]>([]);

  useEffect(() => {
    if (auction !== null) {
      getWinnerByAuctionId(4)
        .then((response) => {
          setWinner(response);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [auction]);

  useEffect(() => {
    getAuctionByJewelryId(jewelry.id)
      .then((response) => {
        setAuctions(response.auctionsData);
        const lastAuction: Auction | undefined = response.auctionsData.pop();
        setAuction(lastAuction);
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
  }, [jewelry.id]);

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
          {winner?.lastName}
        </td>
        <td>
          <JewelryHanOverModal jewelry={jewelry} images={images} user={user} winner={winner} auction={auction} />
          {/* <DeleteJewelryModal jewelry={jewelry} notification={notification} setNotification={setNotification} /> */}
        </td>
      </tr>
    </>
  )
}

export default JewelryHandOverSingle
