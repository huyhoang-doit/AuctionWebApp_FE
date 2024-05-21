import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sidebar">
      <div className="logo d-flex justify-content-between">
        <Link to={"/"}><img src="assets/img/menu/logo/1.png" /></Link>
        <div className="sidebar_close_icon d-lg-none">
          <i className="ti-close"></i>
        </div>
      </div>
      <ul id="sidebar_menu">
        <li className="mm-active">
          <Link to={"/"} aria-expanded="false">

            <img src="assets/img/menu-icon/1.svg" />
            <span>Thống kê</span>
          </Link>
        </li>
        <li >
          <Link className="has-arrow" to={"/admin/account/manager"} aria-expanded="false">
            <img src="assets/img/menu-icon/6.svg" />
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
            <img src="assets/img/menu-icon/7.svg" />
            <span>Lịch sử giao dịch</span>
          </Link>
          <ul>
            <li><Link to={"/admin/transaction/seller"}>Giao dịch với người bán</Link></li>
            <li><Link to={"/admin/transaction/buyer"}>Giao dịch với người mua</Link></li>
            <li><Link to={"/admin/transaction/user"}>Giao dịch với người tham gia</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
