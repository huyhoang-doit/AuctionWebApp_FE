import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getIconImageByJewelryId, getImagesByJewelryId } from '../../../../api/ImageApi'
import { Jewelry } from '../../../../models/Jewelry'
import { Image } from '../../../../models/Image'
import { DeleteJewelryRequestModal, JewelryModal } from '../../Modal/Modal'
import { User } from '../../../../models/User'
import { RequestApproval } from '../../../../models/RequestApproval'
import { formatNumberAcceptNull } from '../../../../utils/formatNumber'

type JewelryWaitSingleProps = {
  request: RequestApproval;
  jewelry: Jewelry | undefined;
  user: User | null,
  handleChangeList: () => Promise<void>
  setNotification: React.Dispatch<React.SetStateAction<string>>
}

export const JewelryWaitSingle: React.FC<JewelryWaitSingleProps> = ({ request, jewelry, user, setNotification, handleChangeList }) => {
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
          <Link
            className="account-order-id"
            to={""}
          >
            {jewelry?.id}
          </Link>
        </td>
        <td>
          {jewelry?.name}
        </td>
        <td>{jewelry?.user?.lastName}</td>
        <td>
          {formatNumberAcceptNull(request?.desiredPrice)}
        </td>
        <td>
          <img style={{ width: '60px', height: '60px' }} src={image?.data} alt='jewelry' />
        </td>
        <td>
          <JewelryModal jewelry={jewelry} images={images} user={user} request={request} handleChangeList={handleChangeList} />
          <DeleteJewelryRequestModal jewelry={jewelry} request={request} setNotification={setNotification} handleChangeList={handleChangeList} />
        </td>
      </tr>
    </>
  )
}


