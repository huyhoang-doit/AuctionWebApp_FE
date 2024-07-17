import { useState } from "react";
import { Jewelry } from "../../../../models/Jewelry";
import { Button, Modal } from "react-bootstrap";

interface DeleteJewelryModalProps {
    jewelry: Jewelry;
    handleChangeList: () => void;
  }
  
  export const DeleteJewelryModal: React.FC<DeleteJewelryModalProps> = ({
    jewelry, handleChangeList
  }) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
      setShow(false);
    };
    const handleShow = () => setShow(true);
    const handleDelete = async () => {
      try {
        // await changeStateTransaction(transaction.id, "HIDDEN");
        await handleChangeList();
        handleClose();
      } catch (error) {
        console.error("Failed to change transacion state or update the list:", error);
      }
    };
  
    return (
      <>
        <button
          type="button"
          className="btn btn-sm btn-danger ms-2 "
          id="save-profile-tab"
          role="tab"
          aria-controls="account-details"
          aria-selected="false"
          onClick={handleShow}
        >
          Xóa
        </button>
        {show && (
          <div className="overlay">
            <Modal
              show={show}
              onHide={handleClose}
              centered
              backdropClassName="custom-backdrop"
            >
              <Modal.Header className="text-center w-100">
                <Modal.Title className="w-100">
                  <div className="col-12 text-center">Xác nhận xóa tài sản</div>
                  <div className="col-12 mb-3 text-center ">
                    <span className="text-danger fw-bold">Mã trang sức: {jewelry.id}</span><br/>
                    <span className="text-danger fw-bold">Tên: {jewelry.name}</span>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5 className="fw-semibold">
                  Bạn có chắc muốn xóa tài sản này khỏi danh sách không?
                </h5>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="dark" onClick={handleClose}>
                  Hủy
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                  Xác nhận
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </>
    );
  };