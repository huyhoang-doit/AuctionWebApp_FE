import { useState } from "react";
import { User } from "../../models/User";
import { isPhoneNumberWrongFormat, isYearOfBirthWrongFormat } from "../../utils/checkRegister";
import { ToastContainer, toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";

interface SaveEditProfileModalProps {
  user: User | null;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  handleEdit: (isConfirm: boolean) => void;
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
        toast.error(message);
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
      <ToastContainer />
    </>
  );
};