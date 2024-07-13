import React, { useEffect, useState } from 'react'
import { Image } from '../../../../models/Image'
import { User } from '../../../../models/User';
import { formatNumberAcceptNull } from '../../../../utils/formatNumber';
import { getImagesByJewelryId } from '../../../../api/ImageApi';
import { Jewelry } from '../../../../models/Jewelry';
import { formatDateStringAcceptNull } from '../../../../utils/formatDateString';
type JewelriesReturnViolatorSingleProps = {
  jewelry: Jewelry;
  user: User | null,
  handleChangeList: () => Promise<void>
}
const JewelriesReturnViolatorSingle: React.FC<JewelriesReturnViolatorSingleProps> = ({ jewelry, user, handleChangeList }) => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    getImagesByJewelryId(jewelry?.id ? jewelry.id : 1)
      .then((response) => {
        setImages(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [jewelry]);

  return (
    <>
      <tr>
        <td>
          {jewelry?.id}
        </td>
        <td>
          {jewelry?.name}
        </td>
        <td>{jewelry?.user?.fullName}</td>
        <td>
          {formatNumberAcceptNull(jewelry?.buyNowPrice)}
        </td>
        <td>
          {formatDateStringAcceptNull(jewelry?.receivedDate)}
        </td>
        <td className='fw-semibold'>
          Ban giao
        </td>
        <td>
          {/* <JewelryHanOverModal transaction={transaction} images={images} user={user} jewelry={jewelry} auction={auction} handleChangeList={handleChangeList} /> */}
        </td>
      </tr>
    </>
  )
}

export default JewelriesReturnViolatorSingle
