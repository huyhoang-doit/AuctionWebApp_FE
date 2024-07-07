import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './ViewProducts.css'; // Tạo và nhập tệp CSS riêng cho kiểu tùy chỉnh
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ViewProducts = () => {
    const [price, setPrice] = useState('10,000,000 VND');
    const [status, setStatus] = useState('Chưa xác nhận');
    const [startingPrice, setStartingPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [deposit, setDeposit] = useState(0);
    const [minimumIncrement, setMinimumIncrement] = useState(0);
    const [maximumIncrement, setMaximumIncrement] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value);
    };

    const handleStartingPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartingPrice(Number(e.target.value));
    };

    const handleDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeposit(Number(e.target.value));
    };

    const handleMinimumIncrementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinimumIncrement(Number(e.target.value));
    };

    const handleMaximumIncrementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaximumIncrement(Number(e.target.value));
    };

    const handleStartDateChange = (date: Date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date: Date) => {
        setEndDate(date);
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
                                                            <label>Mã phiên đấu giá</label>
                                                            <input type="text" className="form-control" placeholder="MSP0001" readOnly />
                                                        </div>
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
                                                            <label>Giá khởi điểm</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={startingPrice}
                                                                onChange={handleStartingPriceChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label>Tiền đặt trước</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={deposit}
                                                                onChange={handleDepositChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label>Mức tăng tối thiểu</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={minimumIncrement}
                                                                onChange={handleMinimumIncrementChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label>Mức tăng tối đa</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={maximumIncrement}
                                                                onChange={handleMaximumIncrementChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label>Thời gian bắt đầu</label>
                                                            <br />
                                                            <DatePicker
                                                                selected={startDate}
                                                                onChange={handleStartDateChange}
                                                                showTimeSelect
                                                                timeFormat="HH:mm"
                                                                dateFormat="dd/MM/yyyy HH:mm"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label>Thời gian kết thúc</label>
                                                            <br />
                                                            <DatePicker
                                                                selected={endDate}
                                                                onChange={handleEndDateChange}
                                                                showTimeSelect
                                                                timeFormat="HH:mm"
                                                                dateFormat="dd/MM/yyyy HH:mm"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="col-md-12 mb-3">
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
                                                                data={description}
                                                                onReady={editor => {
                                                                    editor.editing.view.change((writer) => {
                                                                        const root = editor.editing.view.document.getRoot();
                                                                        if (root) {
                                                                            writer.setStyle('height', '200px', root);
                                                                        }
                                                                    })
                                                                }}
                                                                onChange={(event, editor) => {
                                                                    const data = editor.getData();
                                                                    setDescription(data);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex justify-content-end mt-3">
                                                <Link to="/manager/request" className="btn btn-warning me-2">Quay lại</Link>
                                                <button className="btn btn-success">Sửa phiên đấu giá</button>
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
