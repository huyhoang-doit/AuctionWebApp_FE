
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getImagesByJewelryId } from "../../api/ImageApi";
import { Image } from "../../models/Image";
import { Jewelry } from "../../models/Jewelry";

interface ImageProductProps {
    jewelry: Jewelry | null;
}

const ImageProduct: React.FC<ImageProductProps> = (props) => {
    const jewelryId: number | null = props.jewelry ? props.jewelry.id : null;
    const [images, setImages] = useState<Image[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (jewelryId !== null) {
            getImagesByJewelryId(jewelryId)
                .then((imagesData) => {
                    setImages(imagesData);
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    setError(error.message);
                });
        }
    }, []); // chi goi 1 lan

    if (loading) {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="row">
            <div className="col-12">
                <Carousel showArrows={false} showIndicators={true} showThumbs={true}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image.data}
                                style={{ maxWidth: "400px" }}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ImageProduct;
