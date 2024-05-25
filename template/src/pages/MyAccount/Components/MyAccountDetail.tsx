import { useEffect, useState } from "react";
import { User } from "../../../models/User";
import { editProfileUser } from "../../../api/UserAPI";
import { SaveEditProfileModal } from "../Modal/Modal";

interface MyAccountDetailProps {
    user: User | null;
    setUser: (user: User) => void;
}

export const MyAccountDetail: React.FC<MyAccountDetailProps> = (props) => {
    const [avatar, setAvatar] = useState<File | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState<User | null>(props.user);
    const [notification, setNotification] = useState("");

    useEffect(() => {
        setUser(props.user);
    }, [props.user]);

    const getBase64 = (file: File): Promise<string | null> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result ? (reader.result as string) : null);
            reader.onerror = (error) => reject(error);
        });
    }

    const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && user) {
            const file = e.target.files[0];
            try {
                const base64 = await getBase64(file);

                if (base64) {
                    const updatedUser: User = {
                        ...user,
                        avatar: base64
                    };

                    const response = await editProfileUser(updatedUser);
                    props.setUser(response); // Update the user state with the response from the API
                    setAvatar(file);
                }
            } catch (error) {
                console.error("Error converting file to Base64: ", error);
            }
        }
    }

    if (!user) {
        return <div>Loading user details...</div>;
    }

    const handleEdit = async () => {
        if (isEditing && user) {
            // const updatedUser: User = {
            //     ...user,
            //     cccd: document.querySelector<HTMLInputElement>('#cccd-input')?.value || '',
            //     yob: document.querySelector<HTMLInputElement>('#yob-input')?.value || '',
            //     username: document.querySelector<HTMLInputElement>('#username-input')?.value || '',
            //     email: document.querySelector<HTMLInputElement>('#email-input')?.value || '',
            //     firstName: document.querySelector<HTMLInputElement>('#first-name-input')?.value || '',
            //     lastName: document.querySelector<HTMLInputElement>('#last-name-input')?.value || '',
            //     address: document.querySelector<HTMLInputElement>('#address-input')?.value || '',
            //     province: document.querySelector<HTMLInputElement>('#province-input')?.value || '',
            //     city: document.querySelector<HTMLInputElement>('#city-input')?.value || '',
            //     phone: document.querySelector<HTMLInputElement>('#phone-input')?.value || ''
            // };

            try {
                const response = await editProfileUser(user);

                props.setUser(response);

                setNotification("Cập nhật thông tin thành công!");
            } catch (error) {
                console.error("Error updating user profile: ", error);
            }
        } else {
            setIsEditing(true);
        }
    };

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setUser({ ...user, firstName: newValue });
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setUser({ ...user, lastName: newValue });
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setUser({ ...user, address: newValue });
    };

    return (
        <div
            className="tab-pane fade active"
            id="account-details"
            role="tabpanel"
            aria-labelledby="account-details-tab"
        >
            <div className="">
                <h4 className="small-title mb-4">
                    Thông tin tài khoản
                </h4>
            </div>
            <div className="myaccount-details">
                <div className="row">

                    <div className="col-sm-12 col-md-12  col-xs-12 col-lg-12">
                        <form >
                            <div className="login-form">
                                <div className="row profile-header-content">
                                    <div className="col-md-4 profile-header-img" style={{ width: '200px', height: '200px' }}>
                                        <img className="rounded-circle border border-4" src={user?.avatar} alt="" />
                                    </div>
                                    <div className="col-md-8 profile-header-info">
                                        <h4 className="fw-bold m-t-sm">{user?.fullName}</h4>
                                        <label htmlFor="customFile" className="custom-file-upload btn btn-xs btn-primary mt-4" style={{ backgroundColor: "black", border: "none", color: "white", width: "140px" }}>
                                            Đổi ảnh đại diện
                                        </label>
                                        <input onChange={handleAvatarChange} id='customFile' type="file" accept="image/*" />
                                        {notification && <span className="fw-bold" style={{color: "green"}}>{notification}</span>}
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label>Số CCCD</label>
                                        <input
                                            className="mb-0 input-required"
                                            type="text"
                                            placeholder="Nhập số căn cước"
                                            readOnly
                                            value={user?.cccd}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Năm sinh</label>
                                        <input
                                            className="mb-0 input-required"
                                            type="text"
                                            placeholder="Nhập năm sinh"
                                            readOnly
                                            value={user?.yob}
                                        />

                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Tên tài khoản</label>
                                        <input className="mb-0 input-required"
                                            type="text"
                                            placeholder="Nhập username của bạn"
                                            readOnly
                                            style={{ backgroundColor: "#F5F5F5" }}
                                            value={user?.username}
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Email</label>
                                        <input className="mb-0 input-required"
                                            type="email"
                                            placeholder="Nhập Email của bạn"
                                            style={{ backgroundColor: "#F5F5F5" }}
                                            readOnly
                                            value={user?.email}
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Họ</label>
                                        <input className="mb-0 input-required"
                                            type="text"
                                            placeholder="Nhập họ của bạn"
                                            readOnly
                                            value={user?.firstName || ""}
                                            onChange={handleFirstNameChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Tên</label>
                                        <input
                                            type="text"
                                            className="mb-0 input-required"
                                            placeholder="Nhập tên của bạn"
                                            readOnly
                                            value={user?.lastName}
                                            onChange={handleLastNameChange}
                                        />
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <label>Địa chỉ</label>
                                        <input
                                            className="input-required"
                                            type="text"
                                            placeholder="Nhập địa chỉ của bạn"
                                            readOnly
                                            value={user?.address}
                                            onChange={handleAddressChange}
                                        />
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <label>Tỉnh</label>
                                        <input
                                            className="input-required"
                                            type="text"
                                            placeholder="Nhập tỉnh"
                                            readOnly
                                            value={user?.province}
                                        />
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <label>Thành phố</label>
                                        <input
                                            className="input-required"
                                            type="text"
                                            placeholder="Nhập thành phố"
                                            readOnly
                                            value={user?.city}
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Phone</label>
                                        <input
                                            className="input-required"
                                            type="text"
                                            placeholder="Nhập số điện thoại của bạn"
                                            readOnly
                                            value={user?.phone}
                                        />

                                    </div>
                                    <div className="col-12">
                                        {/* <button id="button-state" type="button" onClick={changeState} className="btn btn-xs btn-primary mb-3 mt-2"
                                            style={{ backgroundColor: "black", border: "none" }}>{isEditing ? "Lưu" : "Chỉnh sửa"}
                                        </button> */}
                                        <SaveEditProfileModal />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
