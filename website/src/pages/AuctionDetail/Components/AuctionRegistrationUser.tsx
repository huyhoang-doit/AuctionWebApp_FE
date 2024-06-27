import React from "react";
import { Auction } from "../../../models/Auction";
import { User } from "../../../models/User";
import { useTranslation } from "react-i18next";

interface AuctionDetailHistoryProps {
  auction: Auction | null;
  usersRegistration: User[];
}

export const AuctionRegistrationUser: React.FC<AuctionDetailHistoryProps> = ({
  usersRegistration,
  auction,
}) => {
  const { t } = useTranslation(["Components"]);

  return (
    <div id="registration" className="tab-pane" role="tabpanel">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {t("AuctionRegistrationUser.Hiển thị")}
          <select
            // onChange={(e) => setBidPerPage(Number(e.target.value))}
            defaultValue={3}
            className="btn-group ms-1 me-1"
          >
            <option value={3} className="dropdown-item">
              3
            </option>
            <option value={5} className="dropdown-item">
              5
            </option>
            <option value={10} className="dropdown-item">
              10
            </option>
          </select>
          {t("AuctionRegistrationUser.lượt trả giá")}
        </div>
        <span style={{ flex: "end" }}>
          <input
            type="text"
            placeholder={t("AuctionRegistrationUser.Tìm kiếm...")}
            style={{ borderRadius: "10px", height: "35px", padding: "10px" }}
          />
        </span>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered specification-inner_stuff mt-4">
          <thead>
            <tr>
              <th className="col-1">Id</th>
              <th className="col-3">
                {t("AuctionRegistrationUser.Tên người dùng")}
              </th>
              <th className="col-2">
                <b>{t("AuctionRegistrationUser.Họ tên")}</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {React.Children.toArray(
              usersRegistration.map((user, index) => {
                return (
                  <tr>
                    <td className={`col-1`}>{user.id}</td>
                    <td className={`col-3`}>{user.username}</td>
                    <td className={`col-2`}>{user.fullName}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
