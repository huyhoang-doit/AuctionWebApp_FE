import { Link } from "react-router-dom"

const Error = () => {
    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li className="active">Error 404</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="error404-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 me-auto ms-auto text-center">
                            <div className="search-error-wrapper">
                                <h1>404</h1>
                                <h2>KHÔNG TÌM THẤY TRANG</h2>
                                <p className="short_desc">
                                    Xin lỗi nhưng trang bạn đang tìm kiếm không tồn tại, đã bị xóa, đã thay đổi tên hoặc tạm thời không khả dụng.
                                </p>
                                <form action="javascript:void(0)" className="error-form">
                                    <div className="inner-error_form">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="error-input-text"
                                        />
                                        <button type="submit" className="error-search_btn">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                                <div className="umino-btn-ps_center"></div>
                                <Link to={"/index"} className="umino-error_btn"
                                >Back To Home Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error