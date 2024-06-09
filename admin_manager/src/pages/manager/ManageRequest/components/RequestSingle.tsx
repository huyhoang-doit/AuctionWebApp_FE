import React, { useEffect, useState } from 'react'
import { RequestApproval } from '../../../../models/RequestApproval'
import { formatNumber } from '../../../../utils/formatNumber'
import { formatDateStringAcceptNull } from '../../../../utils/formatDateString'
import { DeleteJewelryRequestModal, JewelryModal } from '../../Modal/Modal'
import { User } from '../../../../models/User'
import { Image } from '../../../../models/Image'
import { getIconImageByJewelryId, getImagesByJewelryId } from '../../../../api/ImageApi'


interface RequestSingleProps {
  request: RequestApproval,
  user: User | null,
  handleChangeList: () => Promise<void>
}
const RequestSingle: React.FC<RequestSingleProps> = ({ request, user, handleChangeList }) => {
  const [image, setImage] = useState<Image | null>(null)
  const [images, setImages] = useState<Image[]>([])
  const [userState, setUserState] = useState<User | null>(user);

  useEffect(() => {
    setUserState(user);
  }, [user]);

  useEffect(() => {
    getIconImageByJewelryId(request.jewelry?.id ? request.jewelry.id : 1)
      .then((response) => {
        setImage(response);
      })
      .catch((error) => {
        console.error(error.message);
      });

    getImagesByJewelryId(request.jewelry?.id ? request.jewelry.id : 1)
      .then((response) => {
        setImages(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [])
  return (
    <>
      <tr key={request.id}>
        <td>{request.id}</td>
        <td>{request.jewelry?.id}</td>
        <td>{request.jewelry?.category?.name}</td>
        <td>{request.sender?.id}</td>
        <td>{formatNumber(request.valuation)}</td>
        <td>{formatDateStringAcceptNull(request.requestTime)}</td>
        <td>
          <JewelryModal jewelry={request.jewelry} images={images} user={user} request={request} handleChangeList={handleChangeList} />
          <DeleteJewelryRequestModal jewelry={request.jewelry} request={request} user={user} handleChangeList={handleChangeList} />
        </td>
      </tr>
    </>
  )
}

export default RequestSingle
