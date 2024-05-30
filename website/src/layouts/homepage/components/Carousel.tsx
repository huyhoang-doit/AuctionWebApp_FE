function Carousel() {
    return (
        <div className="container">
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={"assets/images/banner/2-1.jpg"}
                            className="d-block w-100"
                            alt="..."
                            style={{ height: "500px" }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={"assets/images/banner/2-2.jpg"}
                            className="d-block w-100"
                            alt="..."
                            style={{ height: "500px" }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={"assets/images/slider/2-1.jpg"}
                            className="d-block w-100"
                            alt="..."
                            style={{ height: "500px" }}
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
