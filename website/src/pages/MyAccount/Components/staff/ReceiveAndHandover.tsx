import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { User } from "../../../../models/User";
import { Link } from "react-router-dom";
import JewelriesHandOverList from "./JewelriesHandOverList";
import JewelrySentToWebList from "./JewelrySentToWebList";
import JewelriesReturnViolatorList from "./JewelriesReturnViolatorList";
import { useTranslation } from "react-i18next";
interface ReceiveAndHandoverProps {
  user: User | null;
  listNumber: number;
  setListNumber: Dispatch<SetStateAction<number>>
}
const ReceiveAndHandover: React.FC<ReceiveAndHandoverProps> = (props) => {
  const [user, setUser] = useState<User | null>(props.user);
  const { t } = useTranslation(["Staff"]);


  useEffect(() => {
    setUser(props.user);
  }, [props.user]);
  return (
    <div
      className="tab-pane fade"
      id="receive-handover"
      role="tabpanel"
      aria-labelledby="account-address-tab"
    >
      <div className="myaccount-orders">
        <div className="frequently-accordion about-us_accordion">
          <div id="accordion">
            <div className="card">
              <div className="card-header p-3" id="headingOne"
                style={{ backgroundColor: '#333333', border: '1px solid #fed100' }}
                onClick={() => {
                  props.setListNumber(8);
                }}>
                <h5 className="mb-0 fw-semibold" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link
                    to=""
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', color: 'white' }}
                  >

                    <span>1. {t("Header.Danh sách tài sản chờ tiếp nhận")}</span>
                    <i className="ion-chevron-down"></i>
                  </Link>
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <JewelrySentToWebList
                    userId={user?.id}
                    listNumber={props.listNumber}
                  />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-3" id="headingTwo"
                style={{ backgroundColor: '#333333', border: '1px solid #fed100' }}
                onClick={() => {
                  props.setListNumber(9);
                }}
              >
                <h5 className="mb-0 fw-semibold" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link
                    to={""}
                    className="collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', color: 'white' }}
                  >
                    2. {t("Header.Danh sách tài sản bàn giao")}
                    <i className="ion-chevron-down"></i>
                  </Link>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <JewelriesHandOverList
                    user={user}
                    setUser={setUser}
                    listNumber={props.listNumber}
                  />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-3" id="headingThree"
                style={{ backgroundColor: '#333333', border: '1px solid #fed100' }}
                onClick={() => {
                  props.setListNumber(10);
                }}
              >
                <h5 className="mb-0 fw-semibold" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link
                    to={""}
                    className="collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo2"
                    aria-expanded="false"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', color: 'white' }}
                  >
                    3. {t("Header.Danh sách tài sản hoàn trả")}
                    <i className="ion-chevron-down"></i>
                  </Link>
                </h5>
              </div>
              <div
                id="collapseTwo2"
                className="collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <JewelriesReturnViolatorList
                    user={user}
                    setUser={setUser}
                    listNumber={props.listNumber}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveAndHandover;
