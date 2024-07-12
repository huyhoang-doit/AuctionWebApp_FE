import { Link } from 'react-router-dom'
import { JwtPayload, jwtDecode } from 'jwt-decode';
import TransactionHistoryMenu from './Navbar/TransactionHistoryMenu';
import AuctionManageMenu from './Navbar/AuctionManageMenu';
import AssetManageMenu from './Navbar/AssetManageMenu';


interface CustomJwtPayload extends JwtPayload {
  authorities: { authority: string }[];
}

const Navbar = () => {
  const token = localStorage.getItem("access_token");

  let userRole = '';

  if (token) {
    const decodedData = jwtDecode<CustomJwtPayload>(token); // Cast to CustomJwtPayload
    userRole = decodedData.authorities[0].authority;

  }

  return (

    <nav className="sidebar border border-r-1" style={{ backgroundColor: '#f7faff', width: '20%' }}>
      <div className="logo d-flex justify-content-between">
        <Link to={userRole === 'ADMIN' ? "/admin" : "/manager"}><img src="/assets/img/menu/logo/1.png" /></Link>
        <div className="sidebar_close_icon d-lg-none">
          <i className="ti-close"></i>
        </div>
      </div>
      <ul id="sidebar_menu" >
        {userRole === 'ADMIN' && <>
          <li className="mm-active">
            <Link to={"/admin"} aria-expanded="false">

              <img src="/assets/img/menu-icon/1.svg" />
              <span>Thống kê</span>
            </Link>
          </li>
          <li >
            <Link className="has-arrow" to={"/admin/danh-sach-quan-ly"} aria-expanded="false">
              <img src="/assets/img/menu-icon/6.svg" />
              <span>Danh sách quản lý</span>
            </Link>
          </li>
          <li >
            <Link className="has-arrow" to={"/admin/danh-sach-nhan-vien"} aria-expanded="false">
              <img src="/assets/img/menu-icon/6.svg" />
              <span>Danh sách nhân viên</span>
            </Link>
          </li>
          <li >
            <Link className="has-arrow" to={"/admin/danh-sach-nguoi-dung"} aria-expanded="false">
              <img src="/assets/img/menu-icon/6.svg" />
              <span>Danh sách người dùng</span>
            </Link>
          </li>
          <li >
            <Link className="has-arrow" to={"/admin/chua-xac-thuc"} aria-expanded="false">
              <img src="/assets/img/menu-icon/6.svg" />
              <span>Danh sách người dùng chưa xác thực</span>
            </Link>
          </li>
        </>
        }
        {userRole === 'MANAGER' && <>
          <li className="mm-active">
            <Link to={"/manager"} aria-expanded="false">
              <img src="/assets/img/menu-icon/1.svg" />
              <span>Thống kê </span>
            </Link>
          </li>
          <AuctionManageMenu />
          <AssetManageMenu />
          <TransactionHistoryMenu />
          <li >
            <Link className="has-arrow" to={"/manager/dang-ky-dau-gia"} aria-expanded="false">
              <i className="fa-solid fa-user-group"></i>
              <span>Danh sách đăng ký tham gia đấu giá</span>
            </Link>
          </li>
          <li>
            <Link className="has-arrow" to={"/manager/hoa-don-qua-han"} aria-expanded="false">
              <i className="fa-solid fa-circle-exclamation"></i>
              <span>Danh sách hóa đơn quá hạn thanh toán</span>
            </Link>
          </li>
        </>
        }

      </ul>
    </nav>

  )
}

export default Navbar
