import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './ViewProducts.css'; // Tạo và nhập tệp CSS riêng cho kiểu tùy chỉnh
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ViewProducts = () => {
  const [price, setPrice] = useState('10,000,000 VND');
  const [status, setStatus] = useState('Chưa xác nhận');

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Chi tiết các yêu cầu đấu giá</h4>
                  </div>
                  <div className="QA_table mb_30">
                    <div className="row">
                      <div className="col-12 d-flex">
                        <div className="product-image col-md-4">
                          <img src="path-to-image.jpg" alt="Sản phẩm" className="img-fluid" />
                        </div>
                        <div className="product-details col-md-8">
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label>Mã sản phẩm</label>
                              <input type="text" className="form-control" placeholder="MSP0001" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Tên sản phẩm</label>
                              <input type="text" className="form-control" placeholder="Đồng Hồ Thụy Sĩ" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Loại</label>
                              <input type="text" className="form-control" placeholder="Đồng hồ" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Chất liệu</label>
                              <input type="text" className="form-control" placeholder="Thép không gỉ" readOnly />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Mức giá</label>
                              <input
                                type="text"
                                className="form-control"
                                value={price}
                                onChange={handlePriceChange}
                              />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label>Trạng thái</label>
                              <div>
                                <input
                                  type="radio"
                                  value="Xác nhận"
                                  checked={status === 'Xác nhận'}
                                  onChange={handleStatusChange}
                                /> Xác nhận
                                <input
                                  type="radio"
                                  value="Chưa xác nhận"
                                  checked={status === 'Chưa xác nhận'}
                                  onChange={handleStatusChange}
                                  className="ms-3"
                                /> Chưa xác nhận
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <label>Mô tả</label>
                              <CKEditor
                                editor={ClassicEditor}
                                data="<p>Mô tả trang sức</p>"
                                onReady={editor => {
                                  console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event) => {
                                  console.log(event);
                                }}
                                onBlur={(event, editor) => {
                                  console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                  console.log('Focus.', editor);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-end mt-3">
                        <button className="btn btn-primary me-2">Chỉnh sửa</button>
                        <Link to="/manager/request" className="btn btn-warning me-2">Quay lại</Link>
                        <Link to="/manager/create-auction" className="btn btn-success">Tạo phiên đấu giá</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewProducts;