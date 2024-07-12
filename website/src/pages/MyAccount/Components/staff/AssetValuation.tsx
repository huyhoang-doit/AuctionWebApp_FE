import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { User } from "../../../../models/User";
import { useCategories } from "../../../../hooks/useCategories";
import { Link } from "react-router-dom";
import JewelriesWaitList from "./JewelriesWaitList";
import StaffRequestList from "./StaffRequestList";

interface AssetValuationtProps {
  user: User | null;
  setUser: (user: User) => void;
  listNumber: number;
  setListNumber: Dispatch<SetStateAction<number>>;
}

const AssetValuation: React.FC<AssetValuationtProps> = (props) => {
  const [user, setUser] = useState<User | null>(props.user);


  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  return (
    <>
      <div
        className="tab-pane fade "
        id="asset-valuation"
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

                      <span>1. Danh sách tài sản cần định giá</span>
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
                    <JewelriesWaitList
                      user={user}
                      setUser={setUser}
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
                      2. Danh sách tài sản đã định giá
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
                    <StaffRequestList
                      userId={user?.id}
                      listNumber={props.listNumber}
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

export default AssetValuation;
