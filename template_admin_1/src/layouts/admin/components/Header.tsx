import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header_iner d-flex justify-content-between align-items-center py-2">
      <div className="sidebar_icon d-lg-none">
        <i className="ti-menu"></i>
      </div>
      <div className="serach_field-area">
      </div>
      <div className="header_right d-flex justify-content-between align-items-center">
        <div className="text-center me-3">
          <h5>Chào mừng trở lại!</h5>
          <h6>Travor James</h6>
        </div>
        <div className="profile_info">
          <img src="assets/img/client_img.png" alt="#" />
          <div className="profile_info_iner">

            <div className="profile_info_details">
            <Link to="/admin/view/viewProfile">My Profile <i className="ti-user"></i></Link>
              <a href="#">Settings <i className="ti-settings"></i></a>
              <a href="#">Log Out <i className="ti-shift-left"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
