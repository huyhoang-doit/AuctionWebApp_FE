
import { Link } from 'react-router-dom';
import useAccount from '../../../hooks/useAccount';
import { logout } from '../../../api/AuthenticationAPI';
const Header = () => {
  const token = localStorage.getItem("access_token");
  const user = useAccount(token);
  return (
    <div className="d-flex justify-content-between align-items-center py-2 border border-b-1` " style={{ position: "fixed", width: "100%", zIndex: "10", background: "#fff" }}>
      <div className="sidebar_icon d-lg-none">
        <i className="ti-menu"></i>
      </div>
      <div className="serach_field-area">
      </div>
      <div className="header_right d-flex justify-content-between align-items-center">
        <div className="text-center me-3">
          <h5 className='mb-0'>Chào mừng trở lại!</h5>
          <h6>{user?.fullName}</h6>
        </div>
        <div className="profile_info">
          <div
            style={{
              width: "60px",
              height: "60px",
              overflow: "hidden",
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <img src={user?.avatar} alt="avatar" style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }} />
          </div>

          <div className="profile_info_iner">

            <div className="profile_info_details">
              <Link to="/admin/view/viewProfile">My Profile<i className="ti-user"></i></Link>
              {/* <div className='text-white mb-2' style={{ cursor: "pointer" }}>Settings <i className="ti-settings"></i></div> */}
              <div className='text-white' style={{ cursor: "pointer", marginLeft: '5px', marginTop: '10px' }} onClick={() => logout()}>Log Out <i className="ti-shift-left"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
