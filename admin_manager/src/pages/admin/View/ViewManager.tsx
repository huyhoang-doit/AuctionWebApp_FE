import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ViewManager = () => {
  const [status, setStatus] = useState('Active');
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Chi tiết quản lý</h4>
                  </div>
                  <div className="QA_table mb_30">
                    <div className="row">
                      <div className="col-12 d-flex">
                        <div className="manager-image col-md-4">
                          <img src="path-to-portrait.jpg" alt="Quản lý" className="img-fluid" />
                        </div>
                        <div className="manager-details col-md-8">
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label>ID</label>
                              <input type="text" className="form-control" placeholder="MGR001" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Tên tài khoản</label>
                              <input type="text" className="form-control" placeholder="quangson" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Họ và tên</label>
                              <input type="text" className="form-control" placeholder="Lê Quang Sơn" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Email</label>
                              <input type="email" className="form-control" placeholder="lequangson@gmail.com" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Số điện thoại</label>
                              <input type="text" className="form-control" placeholder="0999990999" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Trạng thái</label>
                              <div>
                                <input
                                  type="radio"
                                  value="Active"
                                  checked={status === 'Active'}
                                  onChange={handleStatusChange}
                                /> Active
                                <input
                                  type="radio"
                                  value="Inactive"
                                  checked={status === 'Inactive'}
                                  onChange={handleStatusChange}
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
                        <Link to="/admin/account/manager" className="btn btn-warning me-2">Quay lại</Link>
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
