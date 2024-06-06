import { useEffect, useState } from "react";
import { getIconImageByJewelryId } from "../api/ImageApi";
import { Image } from "../models/Image";

const useIconImage = (jewelryId: number | null) => {
    const [image, setImage] = useState<Image | null>(null);

    useEffect(() => {
        if (jewelryId !== null) {
            getIconImageByJewelryId(jewelryId)
                .then((imagesData) => {
                    setImage(imagesData);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    }, [jewelryId]);

    return image?.data;
}

export default useIconImage;