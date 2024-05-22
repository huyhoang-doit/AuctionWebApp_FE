import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sidebar">
      <div className="logo d-flex justify-content-between">
        <Link to={"/staff"}><img src="assets/img/menu/logo/1.png" /></Link>
        <div className="sidebar_close_icon d-lg-none">
          <i className="ti-close"></i>
        </div>
      </div>
      <ul id="sidebar_menu">
        <li className="mm-active">
          <Link to={"/staff"} aria-expanded="false">

            <img src="assets/img/menu-icon/1.svg" />
            <span>Thống kê </span>
          </Link>
        </li>
        <li >
          <Link to={"/staff/jewelry"} aria-expanded="false">

            <img src="assets/img/menu-icon/2.svg" />
            <span>Danh sách trang sức </span>
          </Link>
        </li>
        <li >
          <Link to={"/staff/send-request"} aria-expanded="false">
            <img src="assets/img/menu-icon/6.svg" />
            <span>Danh sách yêu cầu phê duyệt</span>
          </Link>
        </li>
        <li >
          <Link className="has-arrow" to={"/staff/handover"} aria-expanded="false">
            <img src="assets/img/menu-icon/3.svg" />
            <span>Danh sách sản phẩm bàn giao</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
