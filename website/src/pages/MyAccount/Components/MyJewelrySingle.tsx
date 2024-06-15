import React, { useEffect, useState } from 'react'
import { RequestApproval } from '../../../models/RequestApproval';
import { Jewelry } from '../../../models/Jewelry';
import { User } from '../../../models/User';
import { Image } from '../../../models/Image';
import { getIconImageByJewelryId, getImagesByJewelryId } from '../../../api/ImageApi';
import { Link } from 'react-router-dom';
import { formatNumberAcceptNull } from '../../../utils/formatNumber';
import { ConfirmModal, JewelryModal, RefuseJewelryRequestModal } from '../Modal/Modal';
type JewelrySingleProps = {
  request: RequestApproval;
  jewelry: Jewelry | undefined;
  user: User | null,
  handleChangeList: () => Promise<void>
}
const MyJewelrySingle: React.FC<JewelrySingleProps> = ({ request, jewelry, user, handleChangeList }) => {
  const [image, setImage] = useState<Image | null>(null)
  const [images, setImages] = useState<Image[]>([])
  useEffect(() => {
    getIconImageByJewelryId(jewelry?.id ? jewelry.id : 1)
      .then((response) => {
        setImage(response);
      })
      .catch((error) => {
        console.error(error.message);
      });

    getImagesByJewelryId(jewelry?.id ? jewelry.id : 1)
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
          {jewelry?.id}
        </td>
        <td className="text-start">
          {jewelry?.name}
        </td>
        <td><img style={{ width: '60px', height: '60px' }} src={image?.data} alt='jewelry' /></td>
        <td className='fw-semibold'>
          {formatNumberAcceptNull(request?.desiredPrice)}
        </td>
        <td className='fw-semibold text-success'>
          {formatNumberAcceptNull(request?.valuation)}
        </td>
        <td style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '180px' }}>
          <ConfirmModal jewelry={jewelry} images={images} user={user} request={request} handleChangeList={handleChangeList} />
          <RefuseJewelryRequestModal jewelry={jewelry} request={request} user={user} handleChangeList={handleChangeList} />
        </td>
      </tr>
    </>
  )
}

export default MyJewelrySingle
