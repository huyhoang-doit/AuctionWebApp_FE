import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="sidebar border border-r-1"
      style={{ backgroundColor: "#f7faff", width: "20%" }}
    >
      <div className="logo d-flex justify-content-between">
        <Link to={"/manager"}>
          <img src="assets/img/menu/logo/1.png" />
        </Link>
        <div className="sidebar_close_icon d-lg-none">
          <i className="ti-close"></i>
        </div>
      </div>
      <ul id="sidebar_menu">
        <li className="mm-active">
          <Link to={"/manager"} aria-expanded="false">
            <img src="assets/img/menu-icon/1.svg" />
            <span>Thống kê </span>
          </Link>
        </li>
        <li>
          <Link
            className="has-arrow"
            to={"/manager/yeu-cau-dau-gia"}
            aria-expanded="false"
          >
            <img src="assets/img/menu-icon/2.svg" />
            <span>Danh sách các yêu cầu đấu giá</span>
          </Link>
        </li>
        <li>
          <Link
            className="has-arrow"
            to={"/manager/cac-phien-dau-gia"}
            aria-expanded="false"
          >
            <img src="assets/img/menu-icon/7.svg" />
            <span>Danh sách các phiên đấu giá</span>
          </Link>
        </li>
        <li>
          <Link
            className="has-arrow"
            to={"/manager/tai-san-dang-cho"}
            aria-expanded="false"
          >
            <img src="assets/img/menu-icon/6.svg" />
            <span>Danh sách tài sản đủ điều kiện đấu giá</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
