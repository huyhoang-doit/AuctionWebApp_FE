import React, { useState } from "react";
import { Image } from "../../../models/Image";
import { Jewelry } from "../../../models/Jewelry";
import { RequestApproval } from "../../../models/RequestApproval";
import { User } from "../../../models/User";
import { Button, Modal } from "react-bootstrap";
import { formatNumberAcceptNull } from "../../../utils/formatNumber";
import changeStateRequest, { confirmRequest, sendRequestApprovalFromManager } from "../../../api/RequestApprovalAPI";
import { ToastContainer, toast } from "react-toastify";
import './Modal.css';

interface JewelryModalProps {
  jewelry: Jewelry | undefined;
  images: Image[];
  user: User | null;
  request: RequestApproval;
  handleChangeList: () => Promise<void>
}

// *** MODAL FOR MANAGER ***
// Modal for Jewelry List
export const JewelryModal: React.FC<JewelryModalProps> = ({ jewelry, images, user, request, handleChangeList }) => {
  const [show, setShow] = useState(false);

  const handleCloseJewelryDetail = () => setShow(false);
  const handleShowJewelryDetail = () => setShow(true);
  //

  const handleSendRequestFromManager = async () => {
    const requestBody = {
      id: 0,
      senderId: user?.id,
      requestApprovalId: request.id,
      requestTime: new Date().toISOString()
    }
    console.log(requestBody);

    const newRequest = await sendRequestApprovalFromManager(requestBody)
    if (newRequest) {
      console.log('Staff send request thanh cong');
      handleChangeList()

    }
  }

  const handleConfirm = async () => {
    const confirm = await confirmRequest(request.id, user?.id)
    if (confirm) {
      console.log('confirm thành công')
      handleSendRequestFromManager()
      toast.success(`Đã xác nhận định giá của sản phẩm ${request.jewelry?.id}`)
    }
    handleCloseJewelryDetail()
  }


  return (
    <>
      <Button variant="dark" size="sm" onClick={handleShowJewelryDetail}>
        View
      </Button>
      {show && (
        <div className='overlay' >
          <Modal
            show={show}
            onHide={handleCloseJewelryDetail}
            centered
            backdrop="static"
            size='lg'
          >
            <Modal.Header>
              <Modal.Title className='w-100'>
                <div className='col-12 text-center'>Thông tin tài sản</div>
                <div className='col-12 mb-3 text-center '><span className='text-warning fw-bold'>{jewelry?.name}</span></div>
                <h5 className='col-12'>Nhân viên gửi yêu cầu - <span className=' fw-bold'>{request.sender?.firstName}</span></h5>
                <h5 className='col-12'>Mã nhân viên - <span className=' fw-bold'>{request.sender?.id}</span></h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form action="">
                <div className="checkbox-form">
                  <div className="row">
                    <div className="col-md-12 ">
                      <div className="country-select clearfix">
                      </div>
                    </div>
                    <div className="col-md-12 fw-medium">
                      <div className="checkout-form-list mb-2 row">
                        <div className='col-md-6'>
                          <label>
                            Chủ tài sản:
                          </label>
                          <span className='fw-bold'> {jewelry?.user?.fullName}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Mã người dùng:
                          </label>
                          <span className='fw-bold'> {jewelry?.user?.id}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Mã tài sản:{" "}
                        </label>
                        <span className='fw-bold'> {jewelry?.id}</span>
                      </div>
                      <div className="checkout-form-list mb-2">
                        <label>
                          Tên:
                        </label>
                        <span className='fw-bold'> {jewelry?.name}</span>
                      </div>
                      <div className="checkout-form-list mb-2 row">
                        <div className='col-md-6'>
                          <label>
                            Danh mục:
                          </label>
                          <span className='fw-bold'> {jewelry?.category?.name}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Thương hiệu:
                          </label>
                          <span className='fw-bold'> {jewelry?.brand}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Chất liệu:
                          </label>
                          <span className='fw-bold'> {jewelry?.material}</span>
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Trọng lượng (g):
                          </label>
                          <span className='fw-bold'> {jewelry?.weight}</span>
                        </div>
                      </div>
                      <div className="checkout-form-list checkout-form-list-2 mb-2">
                        <label>Mô tả </label><br />
                        <textarea readOnly className='w-100 h-auto p-1'
                          id="checkout-mess"
                          value={jewelry?.description}
                        ></textarea>
                      </div>
                      <div className="w-100 fw-medium">
                        <div className="checkout-form-list row">
                          <label>
                            Hình ảnh
                          </label>
                          {/* {React.Children.toArray(images.map(
                            (img: Image) =>
                              <div className='col-md-3'>
                                <img src={img.data} alt="Ảnh sản phẩm" />
                              </div>
                          ))} */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className='text-danger fw-bold'>Giá đề xuất</label>
                        <input className=' fw-bold'
                          placeholder=""
                          type="text"
                          value={formatNumberAcceptNull(request?.desiredPrice)}
                          readOnly={true}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label className='text-success fw-bold'>Định giá</label>
                        <input
                          className=' fw-bold'
                          placeholder=""
                          type="text"
                          value={formatNumberAcceptNull(request.valuation)}
                          readOnly={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleCloseJewelryDetail}>
                Đóng
              </Button >
              <Button variant="warning" onClick={handleConfirm}>
                Xác nhận
              </Button>
            </Modal.Footer>
          </Modal>
        </div >
      )}
    </>
  );
};


interface DeleteJewelryModalProps {
  jewelry: Jewelry | undefined;
  request: RequestApproval;
  handleChangeList: () => Promise<void>
}

// Delete Jewelry Modal
export const DeleteJewelryRequestModal: React.FC<DeleteJewelryModalProps> = ({ jewelry, request, handleChangeList }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    try {
      const resultDelete = await changeStateRequest(request.id, 'HIDDEN');
      if (resultDelete) {
        await handleChangeList();
        handleClose();
        toast.success("Xóa thành công.");
        console.log('Xóa thành công');

      }
    } catch (error) {
      console.log('Xóa thất bại');

    }
  };

  return (
    <><button
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
        <div className='overlay'>
          <Modal show={show} onHide={handleClose} centered backdropClassName="custom-backdrop">
            <Modal.Header>
              <Modal.Title>Xác nhận xóa sản phẩm {jewelry?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc muốn xóa sản phẩm này khỏi danh sách chờ không?</Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Xóa
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};