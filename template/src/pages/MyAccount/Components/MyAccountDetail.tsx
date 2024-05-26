import { useEffect, useState } from "react";
import { User } from "../../../models/User";
import { editProfileUser } from "../../../api/UserAPI";
import { SaveEditProfileModal } from "../Modal/Modal";
import { getAllBanks } from "../../../api/BankAPI";
import { Bank } from "../../../models/Bank";

interface MyAccountDetailProps {
    user: User | null;
    setUser: (user: User) => void;
}

export const MyAccountDetail: React.FC<MyAccountDetailProps> = (props) => {
    const [avatar, setAvatar] = useState<File | null>(null);
    const [user, setUser] = useState<User | null>(props.user);
    const [notification, setNotification] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [banks, setBanks] = useState<Bank[]>([]);

    useEffect(() => {
        setUser(props.user);
    }, [props.user]);

    useEffect(() => {
        getAllBanks()
            .then((response) => {
                setBanks(response);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [])

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
                                        {notification && <span className="fw-bold" style={{ color: "green" }}>{notification}</span>}
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
                                            style={{ backgroundColor: "#F5F5F5" }}
                                            defaultValue={user?.cccd}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Năm sinh</label>
                                        <input
                                            className="mb-0 input-required"
                                            type="text"
                                            placeholder="Nhập năm sinh"
                                            readOnly
                                            defaultValue={user?.yob}
                                            onChange={(e) => setUser({ ...user, yob: e.target.value })}
                                        />

                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Tên tài khoản</label>
                                        <input className="mb-0 input-required"
                                            type="text"
                                            placeholder="Nhập username của bạn"
                                            readOnly
                                            style={{ backgroundColor: "#F5F5F5" }}
                                            defaultValue={user?.username}
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Email</label>
                                        <input className="mb-0 input-required"
                                            type="email"
                                            placeholder="Nhập Email của bạn"
                                            style={{ backgroundColor: "#F5F5F5" }}
                                            readOnly
                                            defaultValue={user?.email}
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Họ</label>
                                        <input className="mb-0 input-required"
                                            type="text"
                                            placeholder="Nhập họ của bạn"
                                            readOnly
                                            defaultValue={user?.firstName || ""}
                                            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Tên</label>
                                        <input
                                            type="text"
                                            className="mb-0 input-required"
                                            placeholder="Nhập tên của bạn"
                                            readOnly
                                            defaultValue={user?.lastName}
                                            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <label>Địa chỉ</label>
                                        <input
                                            className="input-required"
                                            type="text"
                                            placeholder="Nhập địa chỉ của bạn"
                                            readOnly
                                            defaultValue={user?.address}
                                            onChange={(e) => setUser({ ...user, address: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <label>Tỉnh</label>
                                        <input
                                            className="input-required"
                                            type="text"
                                            placeholder="Nhập tỉnh"
                                            readOnly
                                            defaultValue={user?.province}
                                            onChange={(e) => setUser({ ...user, province: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <label>Thành phố</label>
                                        <input
                                            className="input-required"
                                            type="text"
                                            placeholder="Nhập thành phố"
                                            readOnly
                                            defaultValue={user?.city}
                                            onChange={(e) => setUser({ ...user, city: e.target.value })}
                                        />
                                    </div>

                                    <div className="col-md-12 mt-4">
                                        <label >Ngân hàng</label>
                                        <select defaultValue={user.bank?.id} style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }}
                                        >
                                            {banks.map((bank) => (
                                                <option style={{ padding: '5px' }} key={bank.id} value={bank.id}>
                                                    {bank.bankName} ({bank.tradingName})
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Số tài khoản ngân hàng</label>
                                        <input
                                            className="input-required"
                                            type="text"
                                            placeholder="Nhập số tài khoản ngân hàng của bạn"
                                            readOnly
                                            defaultValue={user?.bankAccountNumber}
                                            onChange={(e) => setUser({ ...user, bankAccountNumber: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <label>Tên chủ tài khoản ngân hàng</label>
                                        <input
                                            className="input-required"
                                            type="text"
                                            placeholder="Nhập tên chủ tài khoản ngân hàng"
                                            readOnly
                                            defaultValue={user?.bankAccountName}
                                            onChange={(e) => setUser({ ...user, bankAccountName: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <label>Sô điện thoại</label>
                                        <input
                                            className="input-required"
                                            type="text"
                                            placeholder="Nhập số điện thoại của bạn"
                                            readOnly
                                            defaultValue={user?.phone}
                                            onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <SaveEditProfileModal handleEdit={handleEdit} isEditing={isEditing} setIsEditing={setIsEditing} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}
