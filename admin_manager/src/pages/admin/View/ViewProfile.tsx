import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ViewProfile = () => {
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>My Profile</h4>
                  </div>
                  <div className="QA_table mb_30">
                    <div className="row">
                      <div className="col-12 d-flex">
                        <div className="profile_picture col-md-4">
                          <img src="path_to_profile_picture.jpg" alt="Profile" className="img-fluid" />
                        </div>
                        <div className="profile_info col-md-8">
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label>ID</label>
                              <input type="text" className="form-control" placeholder="123456789" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Login Account</label>
                              <input type="text" className="form-control" placeholder="phuc123" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Full Name</label>
                              <input type="text" className="form-control" placeholder="phuc" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Email</label>
                              <input type="email" className="form-control" placeholder="phuc@egmail.com" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Phone Number</label>
                              <input type="text" className="form-control" placeholder="(123) 456-7890" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Position</label>
                              <input type="text" className="form-control" placeholder="Software Engineer" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Gender</label>
                              <input type="text" className="form-control" placeholder="Male" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Date of Birth</label>
                              <input type="text" className="form-control" placeholder="2990" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Address</label>
                              <input type="text" className="form-control" placeholder="thu duc" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Citizen ID</label>
                              <input type="text" className="form-control" placeholder="ABCD123456789" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Password</label>
                              <input type="password" className="form-control" placeholder="********" readOnly />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-end mt-3">
                        <button className="btn btn-primary me-2">Edit</button>
                        <Link to="/admin/account/profile" className="btn btn-warning">Back</Link>
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

export default ViewProfile;
