import React, { useContext, useEffect, useState } from "react";
import { Jewelry } from "../../../models/Jewelry";
import { User } from "../../../models/User";
import { Auction } from "../../../models/Auction";
import { AuctionDetailHistory } from "./AuctionDetailHistory";
import { AuctionDetailJewelry } from "./AuctionDetailJewelry";
import { AuctionHistory } from "../../../models/AuctionHistory";
import Stomp from "stompjs";
import { UserContext } from "../../../hooks/useContext";
import { AuctionRegistrationUser } from "./AuctionRegistrationUser";
import { getUserRegistrationByAuction } from "../../../api/UserAPI";
import { useTranslation } from "react-i18next";
interface AuctionTabDetailProps {
  isBid: boolean;
  auction: Auction | null;
  jewelry: Jewelry | null;
  staff: User | null;
  auctionHistories: AuctionHistory[];
  setBidPerPage: (bid: number) => void;
  stompClient: Stomp.Client | null;
  connected: boolean;
}

export const AuctionTabDetail: React.FC<AuctionTabDetailProps> = ({
  stompClient,
  connected,
  isBid,
  auctionHistories,
  setBidPerPage,
  auction,
  jewelry,
  staff,
}) => {
  const [usersRegistration, setUsersRegistration] = useState<User[]>([]);
  const context = useContext(UserContext);

  let user: User | null = null;
  if (context?.account) {
    user = context.account;
  }

  useEffect(() => {
    const fetchData = async () => {
      if (auction && user && user?.username === staff?.username) {
        const users = await getUserRegistrationByAuction(auction?.id);
        if (users)
          setUsersRegistration(users);
      }
    };
    fetchData();
  }, [auction, user, staff]);

  const { t } = useTranslation(["Components"]);

  return (
    <div className="sp-tab_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sp-product-tab_nav">
              <div className="product-tab">
                <ul className="nav product-menu">
                  {isBid && (
                    <li>
                      <a
                        className="active"
                        data-bs-toggle="tab"
                        href="#history"
                      >
                        <span>{t("AuctionTabDetail.Lịch sử đặt giá")}</span>
                      </a>
                    </li>
                  )}
                  {isBid && user?.username === staff?.username && (
                    <li>
                      <a
                        // className="active"
                        data-bs-toggle="tab"
                        href="#registration"
                      >
                        <span>
                          {t(
                            "AuctionTabDetail.Danh sách đăng ký tham gia đấu giá"
                          )}
                        </span>
                      </a>
                    </li>
                  )}
                  <li>
                    <a
                      className={!isBid ? `active` : ""}
                      data-bs-toggle="tab"
                      href="#description"
                    >
                      <span>{t("AuctionTabDetail.Mô tả tài sản")}</span>
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="tab" href="#specification">
                      <span>{t("AuctionTabDetail.Thông tin đấu giá")}</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content umino-tab_content">
                {isBid && (
                  <AuctionDetailHistory
                    staff={staff}
                    stompClient={stompClient}
                    connected={connected}
                    setBidPerPage={setBidPerPage}
                    auctionHistories={auctionHistories}
                    auction={auction}
                  />
                )}
                {isBid && user?.username === staff?.username && (
                  <AuctionRegistrationUser
                    usersRegistration={usersRegistration}
                    auction={auction}
                  />
                )}
                <AuctionDetailJewelry
                  isBid={isBid}
                  auction={auction}
                  jewelry={jewelry}
                />
                <div id="specification" className="tab-pane" role="tabpanel">
                  <table className="table table-bordered specification-inner_stuff">
                    <tbody>
                      <tr>
                        <td>
                          <strong>
                            {t("AuctionTabDetail.Tổ chức đấu giá tài sản")}
                          </strong>
                        </td>
                        <td>
                          <b>{t("AuctionTabDetail.Công ty đấu giá DGS")}</b>
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>
                          <strong>{t("AuctionTabDetail.Đấu giá viên")}</strong>
                        </td>
                        <td>
                          <b>{staff?.fullName}</b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>{t("AuctionTabDetail.Địa chỉ")}</strong>
                        </td>
                        <td>
                          <b>
                            {t(
                              "AuctionTabDetail.Nhà văn hóa sinh viên, Dĩ An, Bình Dương"
                            )}
                          </b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
