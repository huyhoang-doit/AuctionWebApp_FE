import React, { useEffect, useState } from 'react'
<<<<<<< HEAD:template/src/pages/MyAccount/Components/JewelryWaitSingle.tsx
import { DeleteJewelryModal, JewelryModal } from '../Modal/Modal'
import { Jewelry } from '../../../models/Jewelry'
import { getIconImageByJewelryId, getImagesByJewelryId } from '../../../api/ImageApi'
import { Image } from '../../../models/Image'
import { Link } from 'react-router-dom'
=======
import { Jewelry } from '../../../../models/Jewelry'
import { Image } from '../../../../models/Image'
import { getIconImageByJewelryId, getImagesByJewelryId } from '../../../../api/ImageApi'
import { DeleteJewelryModal, JewelryModal } from '../../Modal/Modal'
>>>>>>> de93bc1023bd2ab81606c2c8c52f2f1ab620dc93:template/src/pages/MyAccount/Components/staff/JewelryWaitSingle.tsx

export const JewelryWaitSingle: React.FC<Jewelry> = (jewelry) => {
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
        <td>{jewelry.user.lastName}</td>
        <td>
          {jewelry.price}
        </td>
        <td>
          <img style={{ width: '60px', height: '60px' }} src={image?.data} />
        </td>
        <td>
          <JewelryModal jewelry={jewelry} images={images} />
          <DeleteJewelryModal jewelry={jewelry} />
        </td>
      </tr>
    </>
  )
}


