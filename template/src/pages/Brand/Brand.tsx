import { useEffect, useState } from "react";
import { Bank } from "../../models/Bank";
import "./Brand.css";
import { getAllBanks } from "../../api/BankAPI";
import Carousel from "react-multi-carousel";

export default function Brand() {
    const [banks, setBanks] = useState<Bank[]>([]);

    useEffect(() => {
        getAllBanks()
            .then((response) => {
                setBanks(response);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
    }
    
    return (
        <div className="umino-brand_area" style={{ marginTop: "120px" }}>
            <div className="container">
                <div className="umino-brand_nav">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="umino-section_title">
                                <h3>Các thương hiệu hợp tác</h3>
                            </div>
                            <div className="umino-brand_slider slider-navigation_style-1 mt-5">
                                <div className="row">
                                    <Carousel swipeable={false}
                                        draggable={false}
                                        showDots
                                        autoPlay={true}
                                        responsive={responsive}
                                        ssr={true}
                                        infinite={true}
                                        autoPlaySpeed={1000}
                                        keyBoardControl={true}
                                        rewindWithAnimation={true}
                                        transitionDuration={1000}
                                        containerClass="carousel-container"
                                        removeArrowOnDeviceType={["tablet", "mobile"]}
                                    >
                                        {banks.map((bank) => (
                                            <div className="col-12" key={bank.id}>
                                                <div className="slide-item">
                                                    <img
                                                        src={bank.logo}
                                                        alt={bank.tradingName}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
