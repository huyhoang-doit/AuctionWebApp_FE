import React, { useEffect, useState } from 'react'
import { RequestApproval } from '../../../models/RequestApproval'
import { User } from '../../../models/User'
import { Image } from '../../../models/Image'
import { getImagesByJewelryId } from '../../../api/ImageApi'
import { formatNumber } from '../../../utils/formatNumber'
import { CreateNewAuctionModal } from '../Modal/Modal'
import { Link } from 'react-router-dom'
interface RequestSingleProps {
  request: RequestApproval,
  user: User | null,
  handleChangeList: () => Promise<void>
}
const PassedJewelrySingle: React.FC<RequestSingleProps> = ({ request, user, handleChangeList }) => {
  const [images, setImages] = useState<Image[]>([])
  const [userState, setUserState] = useState<User | null>(user);

  useEffect(() => {
    setUserState(user);
  }, [user]);

  useEffect(() => {
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
        <td>{request.jewelry?.name}</td>
        <td>{request.jewelry?.category?.name}</td>
        <td>
          <Link style={{ textDecoration: "underline" }} target="_blank" to={`/manager/chi-tiet-nguoi-dung/${request.responder?.id}`}>
            {request.responder?.username}
          </Link>
        </td>
        <td>{formatNumber(request.valuation)}</td>
        <td>
          <Link style={{ textDecoration: "underline" }} target="_blank" to={`/manager/chi-tiet-nguoi-dung/${request.staff?.id}`}>
            {request.staff?.username}
          </Link>
        </td>
        <td>
          <CreateNewAuctionModal request={request} jewelry={request.jewelry} user={userState} images={images} handleChangeList={handleChangeList} />
        </td>
      </tr>
    </>
  )
}

export default PassedJewelrySingle
