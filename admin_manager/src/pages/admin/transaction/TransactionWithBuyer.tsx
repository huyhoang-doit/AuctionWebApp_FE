import React, { useState, useEffect, useCallback } from 'react';
import { Modal, Button, Breadcrumb, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import './TransactionWithBuyer.css';

const users = [
  { id: 14, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
];

const TransactionWithBuyer = () => {
  const token = localStorage.getItem("access_token");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleDeleteProduct = () => {
    console.log('Xóa sản phẩm');
    handleCloseModal();
  };

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };

  const handleSearchInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchInput(value);
    setLoading(true);
    if (value === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => user.id.toString().includes(value));
      setFilteredUsers(filtered);
    }
    setLoading(false);
  };

  const offset = (currentPage - 1) * itemsPerPage;
  const currentPageData = filteredUsers.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center px-4 py-3">
              <div className="col-12">
                {/* Breadcrumb Area */}
                <div className="breadcrumb-area">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/admin">Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item>Lịch sử giao dịch</Breadcrumb.Item>
                    <Breadcrumb.Item href="/admin/account/user">Giao dịch với người mua</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Danh sách giao dịch với người mua</h4>
                    <div className="box_right d-flex lms_block">
                      <div className="serach_field_2">
                        <div className="search_inner">
                          <form>
                            <div className="search_field">
                              <input
                                type="text"
                                placeholder="Tìm kiếm..."
                                value={searchInput}
                                onChange={handleSearchInput}
                              />
                            </div>
                            <button type="submit" onClick={(e) => e.preventDefault()}>
                              <i className="ti-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className="add_button ms-2">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#addcategory" className="btn_1">
                          Thêm tài khoản mới
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <table className="table text-center">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Tên người dùng</th>
                          <th scope="col">Họ và tên</th>
                          <th scope="col">Email</th>
                          <th scope="col">Số điện thoại</th>
                          <th scope="col">Trạng thái</th>
                          <th scope="col">Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan={7} className="text-center">
                              <Spinner animation="border" />
                            </td>
                          </tr>
                        ) : (
                          currentPageData.map((user) => (
                            <tr key={user.id}>
                              <th scope="row">
                                <a href="#" className="question_content">{user.id}</a>
                              </th>
                              <td>{user.username}</td>
                              <td>{user.fullname}</td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td>
                                <a className="status_btn">{user.status}</a>
                              </td>
                              <td>
                                <div className="btn-group">
                                  <Link to="/admin/view/ViewTransactionBuyer" className="btn btn-sm btn-warning">Xem</Link>
                                  <Button variant="danger" size="sm" onClick={handleShowModal}>Xóa</Button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                  <PaginationControl
                    page={currentPage}
                    between={5}
                    total={filteredUsers.length}
                    limit={itemsPerPage}
                    changePage={(page) => handlePageChange(page)}
                    ellipsis={1}
                  />
                </div>
                <Modal show={showModal} onHide={handleCloseModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Bạn có chắc chắn muốn xóa lịch sử giao dịch này?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Hủy
                    </Button>
                    <Button variant="danger" onClick={handleDeleteProduct}>
                      Xóa
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransactionWithBuyer;
