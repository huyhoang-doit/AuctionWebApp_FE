import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getIconImageByJewelryId, getImagesByJewelryId } from '../../../../api/ImageApi'
import { Jewelry } from '../../../../models/Jewelry'
import { Image } from '../../../../models/Image'
import { JewelryModal } from '../../Modal/Modal'
import { User } from '../../../../models/User'

type JewelryWaitSingleProps = {
  jewelry: Jewelry;
  user: User | null
}

export const JewelryWaitSingle: React.FC<JewelryWaitSingleProps> = ({ jewelry, user }) => {
  const [image, setImage] = useState<Image | null>(null)
  const [images, setImages] = useState<Image[]>([])
  useEffect(() => {
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
        <td>{jewelry.user?.lastName}</td>
        <td>
          {jewelry.price}
        </td>
        <td>
          <img style={{ width: '60px', height: '60px' }} src={image?.data} />
        </td>
        <td>
          <JewelryModal jewelry={jewelry} images={images} user={user} />
          {/* <DeleteJewelryModal jewelry={jewelry} notification={notification} setNotification={setNotification} /> */}
        </td>
      </tr>
    </>
  )
}


