import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { getUserById } from "../../../api/UserAPI";
import { User } from "../../../models/User";
import "sweetalert2/src/sweetalert2.scss";
import { useParams } from "react-router-dom";

const ViewUserOfManager: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    const { id } = useParams();
    const userId = parseInt(id ?? '0', 10);

    useEffect(() => {
        if (!Number.isNaN(userId) && userId > 0) {
            getUserById(userId)
                .then((user) => setUser(user))
                .catch((error) => {
                    console.error('Error fetching user:', error);
                })
        } else {
            setUser(null);
        }
    }, [userId]);

    return (
        <>
            <section className="main_content dashboard_part">
                <div className="main_content_iner">
                    <div className="container-fluid plr_30 body_white_bg pt_30">
                        <div
                            className="row justify-content-center"
                            style={{ padding: "40px 0px 0px 350px" }}
                        >
                            <div className="col-12">
                                <div className="breadcrumb-area mb-4">
                                </div>
                                <div >
                                    <div className="">
                                        <h4 className="small-title mb-4">
                                            Thông tin tài khoản
                                        </h4>
                                    </div>
                                    <div className="myaccount-details">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-xs-12 col-lg-12">
                                                <form >
                                                    <div className="login-form">
                                                        <div className="row profile-header-content mb-3">
                                                            <div
                                                                className="col-md-4 p-0"
                                                                style={{
                                                                    width: "170px",
                                                                    height: "170px",
                                                                    overflow: "hidden",
                                                                    borderRadius: "50%",
                                                                    position: "relative",
                                                                }}
                                                            >
                                                                <img src={user?.avatar} alt="avatar" style={{
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit: "cover",
                                                                    objectPosition: "center",
                                                                }} />
                                                            </div>
                                                            <div className="col-md-6 profile-header-info ms-4">
                                                                <div className="content" style={{ width: "300px" }}>
                                                                    <h3>{user?.fullName}</h3>
                                                                    <div className={user?.state === 'VERIFIED' ? 'account-verified-text-div' : 'account-inverified-text-div'}>
                                                                        {user?.state === "VERIFIED" ?
                                                                            <p className="account-verified-text-pc fw-bold">
                                                                                <img src="https://lacvietauction.vn/auctionart/upload/image/SuccessIcon.png" alt="" style={{ width: "20px" }} />
                                                                                Đã xác thực
                                                                            </p> :
                                                                            <p className="account-inverified-text-pc fw-bold">
                                                                                <img src="https://static-00.iconduck.com/assets.00/failure-icon-2048x2048-j8y0urc7.png" alt="" style={{ width: "20px", marginRight: "5px" }} />
                                                                                Chưa xác thực
                                                                            </p>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-4">
                                                            <div className="col-md-6">
                                                                <label>Số CCCD</label>
                                                                <input
                                                                    className="mb-0 see-only"
                                                                    type="text"
                                                                    placeholder="Nhập số căn cước"
                                                                    readOnly
                                                                    style={{ backgroundColor: "#F5F5F5" }}
                                                                    value={user?.cccd}
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label>Năm sinh</label>
                                                                <input
                                                                    className="mb-0 see-only"
                                                                    type="text"
                                                                    placeholder="Nhập năm sinh"
                                                                    readOnly
                                                                    value={user?.yob}
                                                                />
                                                            </div>
                                                            <div className="col-md-6 mt-4">
                                                                <label>Tên tài khoản</label>
                                                                <input className="mb-0 see-only"
                                                                    type="text"
                                                                    placeholder="Nhập username của bạn"
                                                                    readOnly
                                                                    style={{ backgroundColor: "#F5F5F5" }}
                                                                    value={user?.username}
                                                                />
                                                            </div>
                                                            <div className="col-md-6 mt-4">
                                                                <label>Email</label>
                                                                <input className="mb-0 see-only"
                                                                    type="email"
                                                                    placeholder="Nhập Email của bạn"
                                                                    style={{ backgroundColor: "#F5F5F5" }}
                                                                    readOnly
                                                                    value={user?.email}
                                                                />
                                                            </div>
                                                            <div className="col-md-6 mt-4">
                                                                <label>Họ</label>
                                                                <input className="mb-0 see-only"
                                                                    type="text"
                                                                    placeholder="Nhập họ của bạn"
                                                                    readOnly
                                                                    value={user?.firstName || ""}
                                                                />
                                                            </div>
                                                            <div className="col-md-6 mt-4">
                                                                <label>Tên</label>
                                                                <input
                                                                    type="text"
                                                                    className="mb-0 see-only"
                                                                    placeholder="Nhập tên của bạn"
                                                                    readOnly
                                                                    value={user?.lastName}
                                                                />
                                                            </div>
                                                            <div className="col-md-12 mt-4">
                                                                <label>Địa chỉ</label>
                                                                <input
                                                                    className="see-only"
                                                                    type="text"
                                                                    placeholder="Nhập địa chỉ của bạn"
                                                                    readOnly
                                                                    value={user?.address}
                                                                />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label>Tỉnh</label>
                                                                <select disabled id="city" style={{ width: '100%', height: '40px', padding: '0 0 0 10px', backgroundColor: "#f5f5f5" }} >
                                                                    <option value={""}>{user?.city}</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label>Quận / Huyện</label>
                                                                <select disabled id="district" style={{ width: '100%', height: '40px', padding: '0 0 0 10px', backgroundColor: "#f5f5f5" }}>
                                                                    <option disabled value={""}>{user?.district}</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label>Phường / Xã</label>
                                                                <select disabled id="ward" style={{ width: '100%', height: '40px', padding: '0 0 0 10px', backgroundColor: "#f5f5f5" }}>
                                                                    <option disabled value={""}>{user?.ward}</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-4">
                                                                <label htmlFor="counterparty_IdCardPhoto1Company_Upload">
                                                                    <input type="text" id="counterparty_IdCardPhoto1Company_Upload"
                                                                        style={{ display: "none" }} />
                                                                    {user?.cccdFirst
                                                                        ? (<img id="img_IdCardPhoto1CompanySelect" style={{ width: "100%", borderRadius: "5px", cursor: "pointer", height: "292px", display: "block" }} src={user.cccdFirst} alt="" />)
                                                                        : (
                                                                            <div id="img_IdCardPhoto1Company" style={{ width: "100%", cursor: "pointer", height: "292px", background: "#f5f5f5", border: "1px dashed #C5D7FC", borderRadius: "4px", display: "flex", justifyContent: "center", textAlign: "center", paddingTop: "32px", paddingBottom: "32px", flexFlow: "column" }}>
                                                                                <img src="https://lacvietauction.vn/auctionart/upload/image/SelectCMNDFIrst.png" alt="Alternate Text" style={{ width: "113.6px", height: "64px", margin: "auto" }} />
                                                                                <p className="upload-CMND-text" style={{ marginTop: "24px" }}>Tải lên ảnh mặt trước CMND/CCCD</p>
                                                                                <p className="upload-CMND-text2">(JPG, PNG kích thước nhỏ hơn 10MB)</p>
                                                                            </div>
                                                                        )}
                                                                </label>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-4">
                                                                <label htmlFor="counterparty_IdCardPhoto2Company_Upload">
                                                                    <input type="text" id="counterparty_IdCardPhoto2Company_Upload"
                                                                        style={{ display: "none" }} />
                                                                    {user?.cccdLast
                                                                        ? (<img id="img_IdCardPhoto2CompanySelect" style={{ width: "100%", borderRadius: "5px", cursor: "pointer", height: "292px", display: "block" }} src={user.cccdLast} alt="" />)
                                                                        : (
                                                                            <div id="img_IdCardPhoto1Company" style={{ width: "100%", cursor: "pointer", height: "292px", background: "#f5f5f5", border: "1px dashed #C5D7FC", borderRadius: "4px", display: "flex", justifyContent: "center", textAlign: "center", paddingTop: "32px", paddingBottom: "32px", flexFlow: "column" }}>
                                                                                <img src="	https://lacvietauction.vn/auctionart/upload/image/UploadCMNDLast.png" alt="Alternate Text" style={{ width: "113.6px", height: "64px", margin: "auto" }} />
                                                                                <p className="upload-CMND-text" style={{ marginTop: "24px" }}>Tải lên ảnh mặt sau CMND/CCCD</p>
                                                                                <p className="upload-CMND-text2">(JPG, PNG kích thước nhỏ hơn 10MB)</p>
                                                                            </div>
                                                                        )}
                                                                </label>
                                                            </div>
                                                            <div className="col-md-12 mt-4">
                                                                <label>Ngân hàng</label>
                                                                <select disabled value={user?.bank?.id} style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }}>
                                                                    <option style={{ padding: '5px' }}>{user?.bank?.bankName} ({user?.bank?.tradingName})</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-6 mt-4">
                                                                <label>Số tài khoản ngân hàng</label>
                                                                <input
                                                                    className="see-only"
                                                                    type="text"
                                                                    placeholder="Nhập số tài khoản ngân hàng của bạn"
                                                                    readOnly
                                                                    value={user?.bankAccountNumber}
                                                                />
                                                            </div>
                                                            <div className="col-md-6 mt-4">
                                                                <label>Tên chủ tài khoản ngân hàng</label>
                                                                <input
                                                                    className="see-only"
                                                                    type="text"
                                                                    placeholder="Nhập tên chủ tài khoản ngân hàng"
                                                                    readOnly
                                                                    value={user?.bankAccountName}
                                                                />
                                                            </div>
                                                            <div className="col-md-12">
                                                                <label>Sô điện thoại</label>
                                                                <input
                                                                    className="see-only"
                                                                    type="text"
                                                                    placeholder="Nhập số điện thoại của bạn"
                                                                    readOnly
                                                                    value={user?.phone}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ViewUserOfManager;
