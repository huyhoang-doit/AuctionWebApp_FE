import React, { useState } from "react";
import { User } from "../../models/User";
import { isPhoneNumberWrongFormat, isYearOfBirthWrongFormat } from "../../utils/checkRegister";
import { Button, Modal, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import { changeStateUser } from "../../api/UserAPI";
import { Image } from "../../models/Image";

interface SaveEditProfileModalProps {
  user: User | null;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  handleEdit: (isConfirm: boolean) => void;
}

interface DeleteUserProps {
  user: User | null;
  setIsRefresh: (value: boolean) => void;
}

export const SaveEditProfileModal: React.FC<SaveEditProfileModalProps> = ({
  user,
  isEditing,
  setIsEditing,
  handleEdit,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    handleEdit(false);
    changeState();
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);

  const changeState = () => {
    setIsEditing(!isEditing);

    const inputs = document.querySelectorAll('input[type="text"]');
    const selects = document.querySelectorAll("select");

    inputs.forEach((input) => {
      if (!isEditing) {
        input.removeAttribute("readOnly");
        input.classList.remove("input-required");
      } else {
        input.setAttribute("readOnly", "");
        input.classList.add("input-required");
      }
    });

    selects.forEach((select) => {
      if (!isEditing) {
        select.removeAttribute("disabled");
        select.classList.remove("input-required");
      } else {
        select.setAttribute("disabled", "");
        select.classList.add("input-required");
      }
    });
  };

  const handleSave = () => {
    const isPhoneNumberValid = !isPhoneNumberWrongFormat(user?.phone ?? "");
    const isYearOfBirthValid = !isYearOfBirthWrongFormat(user?.yob ?? "");

    const errorMessages = [
      {
        isValid: isYearOfBirthValid,
        message: "Vui lòng chọn đúng định dạng ngày sinh.",
      },
      {
        isValid: isPhoneNumberValid,
        message: "Vui lòng chọn đúng số điện thoại.",
      },
      { isValid: user?.district, message: "Vui lòng chọn quận/huyện." },
      { isValid: user?.ward, message: "Vui lòng chọn phường/xã." },
      {
        isValid: user?.bankAccountNumber,
        message: "Vui lòng nhập số tài khoản nhận hoàn tiền đặt trước.",
      },
      {
        isValid: user?.bankAccountName,
        message: "Vui lòng nhập tên chủ thẻ ngân hàng.",
      },
    ];
    for (const { isValid, message } of errorMessages) {
      if (!isValid) {
        // toast.error(message);
        setShowModal(false);
        return;
      }
    }

    handleEdit(true);
    setShowModal(false);
    changeState();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-xs btn-primary mb-3 mt-2"
        id="save-profile-tab"
        role="tab"
        aria-controls="account-details"
        aria-selected="false"
        onClick={!isEditing ? changeState : handleShow}
        style={{ backgroundColor: "black", border: "none" }}
      >
        {isEditing ? "Lưu" : "Chỉnh sửa"}
      </button>
      {showModal && (
        <div className="overlay">
          <Modal
            show={showModal}
            centered
            onHide={handleClose}
            backdropClassName="custom-backdrop"
          >
            <Modal.Header>
              <Modal.Title>Xác nhận lưu thay đổi</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Bạn có chắc muốn thông tin thay đổi tài khoản?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="warning" onClick={handleSave}>
                Lưu
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
      {/* <ToastContainer /> */}
    </>
  );
};



export const DeleteUserModal: React.FC<DeleteUserProps> = ({ user, setIsRefresh }) => {
  const handleDeleteUser = () => {
    if (user?.id === undefined) {
      Swal.fire({
        icon: "error",
        title: "User ID is missing",
      });
      return;
    }
    Swal.fire({
      icon: "warning",
      html: `
        <h4>Xác nhận xóa.</h4>
        <div>Bạn có chắc muốn xóa người dùng: ${user?.username}?</div>`,
      showCancelButton: true,
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return changeStateUser(user.id, "DISABLE")
          .then((response) => {
            if (response) {
              Swal.fire({
                icon: "success",
                title: "User deleted successfully.",
              });
              setIsRefresh(true);
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Failed to delete user.",
              text: error.message,
            });
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  };

  return (
    <>
      <Button variant="danger" size="sm" onClick={handleDeleteUser}>Xóa</Button>
    </>
  );
};


export const CreateNewUserModal: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleCloseCreateAccount = () => setShow(false);
  const handleShowCreateAccount = () => setShow(true);

  return (
    <>
      <Button variant="warning" size="sm" className="btn_1" style={{ backgroundColor: "#3b76ef", border: "none", color: "white" }} onClick={handleShowCreateAccount}>
        Thêm tài khoản mới
      </Button>
      {show && (
        <div className="overlay">
          <Modal
            show={show}
            // onHide={handleCloseCreateAuction}
            centered
            backdrop="static"
            size="xl"
          >
            <Modal.Header>
              <Modal.Title className="w-100">
                <div className="col-12 text-center">Tạo tài khoản người dùng </div>
                <div className="col-12 mb-3 text-center ">
                  <span className="text-warning fw-bold">
                  </span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4 fs-6">
              <form action="">
                <div className="checkbox-form fw-medium row mb-3">
                  {/* <label
                    className="btn btn-dark mb-2"
                    style={{ width: "auto" }}
                    htmlFor="jewelry-img"
                  >
                    Ảnh đại diện
                  </label> */}
                  <div className="col-md-6 checkout-form-list mb-2">
                    <label>Họ</label>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập họ"
                    />
                  </div>
                  <div className="col-md-6 checkout-form-list mb-2">
                    <span>Tên:</span>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập tên"
                    />
                  </div>
                  <div className="col-md-4 checkout-form-list mb-2">
                    <span>Tên tài khoản</span>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập tên tài khoản"
                    />
                  </div>
                  <div className="col-md-4 checkout-form-list mb-2">
                    <span>Email</span>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập tên tài khoản"
                    />
                  </div>
                  <div className="col-md-4 checkout-form-list mb-2">
                    <span>Số điện thoại</span>
                    <input
                      className="mb-0"
                      type="text"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleCloseCreateAccount}>
                Đóng
              </Button>
              <Button variant="warning">
                Tiếp tục
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};