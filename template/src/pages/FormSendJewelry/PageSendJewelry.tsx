export const PageSendJewelry = () => {

    return (
        <>

            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <a href="index.html">Trang chủ</a>
                            </li>
                            <li className="active">Gửi sản phẩm đấu giá</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="umino-login-register_area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12  col-xs-12 col-lg-12">
                            <form>
                                <div className="login-form">
                                    <h4 className="login-title">Gửi thông tin sản phẩm</h4>
                                    <div className="row mb-4">
                                        <div className="col-md-6 col-12 mb--20">
                                            <label>Tên Sản Phẩm</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập tên sản phẩm"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Loại sản phẩm</label>
                                            <input className="mb-0"
                                                type="text"
                                                placeholder="Nhập loại sản phẩm"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Giá</label>
                                            <input
                                                className="mb-0"
                                                type="text"
                                                placeholder="Nhập giá mong muốn"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Thương hiệu</label>
                                            <input
                                                type="text"
                                                placeholder="Nhập thương hiệu"
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Mô Tả</label>
                                            <textarea
                                                className="w-100 h-100"
                                            ></textarea>
                                        </div>
                                        <div className="col-md-12" style={{marginTop: "60px"}}>
                                            <label>Ảnh sản phẩm</label>
                                            <input
                                                type="file"
                                                placeholder="Chọn ảnh sản phẩm"
                                                multiple={true}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button className="umino-register_btn" type="button">
                                                Gửi yêu cầu
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}