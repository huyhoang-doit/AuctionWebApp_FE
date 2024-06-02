import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getUserById } from '../../../api/UserAPI';
import { User } from '../../../models/User';

const ViewManager = () => {
  const [user, setUser] = useState<User | null>(null);
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  const { id } = useParams();
  let userId = 0;
  try {
    userId = parseInt(id + "");
    if (Number.isNaN(userId)) {
      userId = 0;
    }
  } catch (error) {
    userId = 0;
    console.log("Error parsing auction id: " + error);
  }

  console.log(userId)

  useEffect(() => {
    if (userId) {
      getUserById(userId)
        .then((user) =>
          setUser(user)
        )
    }
  }, [userId])


  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center" style={{ padding: "50px 0px 0px 100px" }}>
              <div className="col-12">
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Chi tiết người dùng</h4>
                  </div>
                  <div className="QA_table mb_30">
                    <div className="row">
                      <div className="col-12 d-flex">
                        <div className="manager-image col-md-4">
                          <img src={user?.avatar} alt="Quản lý" className="rounded-circle img-fluid" style={{ width: "250px", height: "250px" }} />
                        </div>
                        <div className="manager-details col-md-8">
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label>ID</label>
                              <input type="text" className="form-control" value={user?.id} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Tên tài khoản</label>
                              <input type="text" className="form-control" value={user?.username} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Họ và tên</label>
                              <input type="text" className="form-control" value={user?.fullName} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Email</label>
                              <input type="email" className="form-control" value={user?.email} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Số điện thoại</label>
                              <input type="text" className="form-control" value={user?.phone} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Số địa chỉ</label>
                              <input type="text" className="form-control" value={user?.address} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Tỉnh</label>
                              <input type="text" className="form-control" value={user?.city} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Quận / Huyện</label>
                              <input type="text" className="form-control" value={user?.district} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Xã / Phường</label>
                              <input type="text" className="form-control" value={user?.ward} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Trạng thái</label>
                              <div>
                                <input
                                  type="radio"
                                  value="Active"
                                  checked={user?.state === 'ACTIVE'}
                                />
                                <input
                                  type="radio"
                                  value="Inactive"
                                  checked={user?.state === 'INACTIVE'}
                                  className="ms-3"
                                /> Inactive
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Ngày tháng năm sinh</label>
                              <DatePicker
                                selected={birthDate}
                                onChange={(date) => setBirthDate(date)}
                                className="form-control"
                                dateFormat="dd/MM/yyyy"
                                isClearable
                                placeholderText="Chọn ngày"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-end mt-3">
                        <button className="btn btn-primary me-2">Chỉnh sửa</button>
                        <Link to="/admin/account/user" className="btn btn-warning me-2">Quay lại</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewManager;
