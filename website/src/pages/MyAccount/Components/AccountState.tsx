import { User } from "../../../models/User";

interface AccountStateProps {
    user: User;
    t: (key: string) => string;
}

const AccountState: React.FC<AccountStateProps> = ({ user, t }) => {
    const renderAccountState = () => {
        switch (user.state) {
            case "VERIFIED":
                return (
                    <p className="account-verified-text-pc fw-bold">
                        <img
                            src="https://lacvietauction.vn/auctionart/upload/image/SuccessIcon.png"
                            alt=""
                            style={{ width: "20px" }}
                        />
                        {t("MyAccountDetail.Đã xác thực")}
                    </p>
                );
            case "BAN_PARTICIPATING":
                return (
                    <p className="account-inverified-text-pc fw-bold">
                        <img
                            src="https://static-00.iconduck.com/assets.00/failure-icon-2048x2048-j8y0urc7.png"
                            alt=""
                            style={{ width: "20px", marginRight: "5px" }}
                        />
                        Bị khóa
                    </p>
                );
            default:
                return (
                    <p className="account-inverified-text-pc fw-bold">
                        <img
                            src="https://static-00.iconduck.com/assets.00/failure-icon-2048x2048-j8y0urc7.png"
                            alt=""
                            style={{ width: "20px", marginRight: "5px" }}
                        />
                        {t("MyAccountDetail.Chưa xác thực")}
                    </p>
                );
        }
    };

    return <div>{renderAccountState()}</div>;
};

export default AccountState;
