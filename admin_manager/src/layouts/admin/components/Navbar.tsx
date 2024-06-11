import { Link } from 'react-router-dom'
import { JwtPayload, jwtDecode } from 'jwt-decode';


interface CustomJwtPayload extends JwtPayload {
  authorities: { authority: string }[];
}

const Navbar = () => {
  const token = localStorage.getItem("access_token");

  let userRole = '';

  if (token) {
    const decodedData = jwtDecode<CustomJwtPayload>(token); // Cast to CustomJwtPayload
    userRole = decodedData.authorities[0].authority;
    console.log(userRole);
    
  }

  return (

    <nav className="sidebar border border-r-1" style={{ backgroundColor: '#f7faff', width: '20%' }}>
      <div className="logo d-flex justify-content-between">
        <Link to={userRole === 'ADMIN' ? "/admin" : "/manager"}><img src="/assets/img/menu/logo/1.png" /></Link>
        <div className="sidebar_close_icon d-lg-none">
          <i className="ti-close"></i>
        </div>
      </div>
      <ul id="sidebar_menu">
        {userRole === 'ADMIN' && <>
          <li className="mm-active">
            <Link to={"/admin"} aria-expanded="false">

              <img src="/assets/img/menu-icon/1.svg" />
              <span>Thống kê</span>
            </Link>
          </li>
          <li >
            <Link className="has-arrow" to={"/admin/account/manager"} aria-expanded="false">
              <img src="/assets/img/menu-icon/6.svg" />
              <span>Quản lý tài khoản</span>
            </Link>
            <ul>
              <li><Link to={"/admin/account/manager"}>Quản lý</Link></li>
              <li><Link to={"/admin/account/staff"}>Nhân viên</Link></li>
              <li><Link to={"/admin/account/user"}>Người dùng</Link></li>
            </ul>
          </li>
          <li >
            <Link className="has-arrow" to={"/admin/transaction/seller"} aria-expanded="false">
              <img src="/assets/img/menu-icon/7.svg" />
              <span>Lịch sử giao dịch</span>
            </Link>
            <ul>
              <li><Link to={"/admin/transaction/seller"}>Giao dịch với người bán</Link></li>
              <li><Link to={"/admin/transaction/buyer"}>Giao dịch với người mua</Link></li>
              <li><Link to={"/admin/transaction/user"}>Giao dịch với người tham gia</Link></li>
            </ul>
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
          <li >

            <Link className="has-arrow" to={"/manager/yeu-cau-dau-gia"} aria-expanded="false">
              <img src="/assets/img/menu-icon/2.svg" />
              <span>Danh sách các yêu cầu đấu giá</span>
            </Link>
          </li>
          <li >
            <Link className="has-arrow" to={"/manager/cac-phien-dau-gia"} aria-expanded="false">
              <img src="/assets/img/menu-icon/7.svg" />
              <span>Danh sách các phiên đấu giá</span>
            </Link>
          </li>
          <li >
            <Link className="has-arrow" to={"/manager/tai-san-dang-cho"} aria-expanded="false">
              <img src="/assets/img/menu-icon/3.svg" />
              <span>Danh sách tài sản đủ điều kiện đấu giá</span>
            </Link>
          </li>
          </>
        }

      </ul>
    </nav>

  )
}

export default Navbar
