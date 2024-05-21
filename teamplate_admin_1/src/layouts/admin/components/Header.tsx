import React from 'react'

const Header = () => {
  return (
    <div className="header_iner d-flex justify-content-between align-items-center">
      <div className="sidebar_icon d-lg-none">
        <i className="ti-menu"></i>
      </div>
      <div className="serach_field-area">
      </div>
      <div className="header_right d-flex justify-content-between align-items-center">
        <div className="text-center me-3">
          <b>
            <h4>Chào mừng trở lại!</h4>
          </b>
          <h5>Travor James</h5>
        </div>
        <div className="profile_info">

          <img src="img/client_img.png" alt="#" />
          <div className="profile_info_iner">

            <div className="profile_info_details">
              <a href="#">My Profile <i className="ti-user"></i></a>
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
