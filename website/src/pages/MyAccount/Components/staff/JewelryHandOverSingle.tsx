import React, { useEffect, useState } from 'react'
import { Image } from '../../../../models/Image'
import { User } from '../../../../models/User';
import { Auction } from '../../../../models/Auction';
import { formatNumberAcceptNull } from '../../../../utils/formatNumber';
import { getImagesByJewelryId } from '../../../../api/ImageApi';
import { JewelryHanOverModal } from '../../Modal/Modal';
import { Transaction } from '../../../../models/Transaction';
type JewelryHandOverSingleProps = {
  transaction: Transaction;
  user: User | null
}
const JewelryHandOverSingle: React.FC<JewelryHandOverSingleProps> = ({ transaction, user }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [auction, setAuction] = useState<Auction | null | undefined>(transaction.auction);
  const jewelry = transaction.auction?.jewelry

  useEffect(() => {
    getImagesByJewelryId(jewelry?.id ? jewelry.id : 1)
      .then((response) => {
        setImages(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [transaction]);

  return (
    <>
      <tr>
        <td>
          {jewelry?.id}
        </td>
        <td>
          {jewelry?.name}
        </td>
        <td>{auction?.id}</td>
        <td>
          {formatNumberAcceptNull(auction?.lastPrice)}
        </td>
        <td className='fw-semibold'>
          {transaction.paymentMethod === 'COD' ? 'Tại quầy' : 'Chuyển khoản'}
        </td>
        <td>
          <JewelryHanOverModal transaction={transaction} images={images} user={user} jewelry={jewelry} auction={auction} />
          {/* <DeleteJewelryModal jewelry={jewelry} notification={notification} setNotification={setNotification} /> */}
        </td>
      </tr>
    </>
  )
}

export default JewelryHandOverSingle
