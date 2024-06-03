import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { getUserById } from '../../../api/UserAPI';
import { User } from '../../../models/User';

const ViewManager = () => {
  const [user, setUser] = useState<User | null>(null);

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
                              <label>Căn cước công dân</label>
                              <input type="text" className="form-control" value={user?.cccd} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Tên tài khoản</label>
                              <input type="text" className="form-control" value={user?.username} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Email</label>
                              <input type="email" className="form-control" value={user?.email} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Họ đệm</label>
                              <input type="text" className="form-control" value={user?.firstName} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Tên</label>
                              <input type="text" className="form-control" value={user?.lastName} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Số điện thoại</label>
                              <input type="text" className="form-control" value={user?.phone} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Năm sinh</label>
                              <input type="text" className="form-control" value={user?.yob} readOnly />
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
                              <label>Số tài khoản ngân hàng</label>
                              <input type="text" className="form-control" value={user?.bankAccountNumber} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Tên tài khoản ngân hàng</label>
                              <input type="text" className="form-control" value={user?.bankAccountName} readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Trạng thái</label>
                              <div>
                                <input
                                  className='me-2 ms-2'
                                  name='state'
                                  type="radio"
                                  value="ACTIVE"
                                  checked={user?.state === 'ACTIVE'}
                                />Đã kích hoạt<br/>
                                <input
                                  className='me-2 ms-2'
                                  type="radio"
                                  name='state'
                                  value="INACTIVE"
                                  checked={user?.state === 'INACTIVE'}
                                /> Chưa kích hoạt<br/>
                                <input
                                  className='me-2 ms-2'
                                  type="radio"
                                  name='state'
                                  value="ACTIVE"
                                  checked={user?.state === 'DISABLE'}
                                />Vô hiệu hóa
                              </div>
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
