import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { handleLogout } from "../../../utils/logout";

export const LogoutModal = () => {
  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        role="tab"
        aria-controls="account-details"
        aria-selected="false"
        // onClick={handleShow}
        onClick={() =>
          Swal.fire({
            icon: "warning",
            html: `
            <h4>Xác nhận đăng xuất.</h4>
            <div>Bạn có chắc muốn đăng xuất khỏi tài khoản ngay bây giờ?</span></div>`,
            showCancelButton: true,
            confirmButtonText: "Xác nhận",
            cancelButtonText: "Hủy",
            showLoaderOnConfirm: true,
            preConfirm: () => {
              handleLogout();
            },
            allowOutsideClick: () => !Swal.isLoading(),
          })
        }
      >
        {" "}
        Đăng xuất
      </div>
    </>
  );
};
