import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { User } from "../../../../models/User";
import useAccount from "../../../../hooks/useAccount";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MyJewelryRequestList } from "./MyJewelryRequestList";
import MyJewelriesPassedList from "./MyJewelriesPassed";
import MyJewelryNeedConfirmList from "./JewellryNeedConfirmList";

interface MyJewelriesListProps {
  user: User | null;
  setUser: (user: User) => void;
  setListNumber: Dispatch<SetStateAction<number>>;
  listNumber: number
}

const MyJewelriesList: React.FC<MyJewelriesListProps> = (props) => {
  const token = localStorage.getItem("access_token");
  const userExit = useAccount(token);

  const [user, setUser] = useState<User | null>(
    userExit?.account || props.user
  );

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);
  const { t } = useTranslation(["MyJewellryList"]);
  return (
    <>
      <div
        className="tab-pane fade "
        id="my-jewelries"
        role="tabpanel"
        aria-labelledby="account-orders-tab"
      >
        <div className="myaccount-orders">
          <div className="frequently-accordion about-us_accordion">
            <div id="accordion">
              <div className="card">
                <div className="card-header p-3" id="headingOne"
                  style={{ backgroundColor: '#333333', border: '1px solid #fed100' }}
                  onClick={() => {
                    props.setListNumber(6);
                  }}>
                  <h5 className="mb-0 fw-semibold" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link
                      to=""
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', color: 'white' }}
                    >

                      <span>1. Các yêu cầu đấu giá tài sản đã gửi</span>
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
                    <MyJewelryRequestList
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
                    props.setListNumber(7);
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
                      2. Thông báo xác nhận định giá tài sản
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
                    <MyJewelryNeedConfirmList
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
                    props.setListNumber(8);
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
                      3. Danh sách tài sản của đã phê duyệt
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
                    <MyJewelriesPassedList
                      user={user}
                      listNumber={props.listNumber}
                      setListNumber={props.setListNumber}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyJewelriesList;
