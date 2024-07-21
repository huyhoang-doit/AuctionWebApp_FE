import React, { useEffect, useState } from 'react'
import { Image } from '../../../models/Image'
import { getImagesByJewelryId } from '../../../api/ImageApi'
import { formatNumber } from '../../../utils/formatNumber'
import { Link } from 'react-router-dom'
import { Jewelry } from '../../../models/Jewelry'
import { formatDateStringAcceptNull } from '../../../utils/formatDateString'
import { EditJewelryModal } from './Modal/EditJewelry'

interface JewelryItemProps {
    jewelry: Jewelry,
    handleChangeList: () => void
}
const JewelryItem: React.FC<JewelryItemProps> = ({ jewelry, handleChangeList }) => {
    const [images, setImages] = useState<Image[]>([])

    useEffect(() => {
        getImagesByJewelryId(jewelry?.id)
            .then((response) => {
                setImages(response);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [])

    return (
        <>
            <tr key={jewelry.id}>
                <td>{jewelry.id}</td>
                <td>{jewelry?.name}</td>
                <td>{jewelry?.category?.name}</td>
                <td>{formatNumber(jewelry.buyNowPrice)}</td>
                <td>{formatDateStringAcceptNull(jewelry.createDate)}</td>
                <td>
                    {jewelry.user?.fullName}
                    <Link style={{ textDecoration: "underline" }} target="_blank" to={`/manager/chi-tiet-nguoi-dung/${jewelry.user?.id}`}>
                        <i className="ms-2 fa-solid fa-eye text-dark"></i>
                    </Link>
                </td>
                <td>
                    <EditJewelryModal jewelry={jewelry} images={images} handleChangeList={handleChangeList} />
                    {/* <DeleteJewelryModal jewelry={jewelry} handleChangeList={handleChangeList} /> */}
                </td>
            </tr>
        </>
    )
}

export default JewelryItem
