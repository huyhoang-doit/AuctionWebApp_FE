import React, { useState } from 'react';
import { Modal, Button, Breadcrumb, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import './TransactionWithBuyer.css';

interface User {
  id: number;
  username: string;
  fullname: string;
  email: string;
  phone: string;
  status: string;
}

const users: User[] = [
  { id: 14, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
  // Add more user data as needed
];

const TransactionWithBuyer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null); // Clear selectedUser when modal is closed
  };

  const handleViewShowModal = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDeleteProduct = () => {
    console.log('Xóa sản phẩm');
    // Perform deletion logic here
    handleCloseModal();
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchInput(value);
    setLoading(true);
    if (value === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user =>
        user.id.toString().includes(value) ||
        user.username.toLowerCase().includes(value.toLowerCase()) ||
        user.fullname.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase()) ||
        user.phone.includes(value)
      );
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
                              <td>{user.id}</td>
                              <td>{user.username}</td>
                              <td>{user.fullname}</td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td>
                                <a className="status_btn">{user.status}</a>
                              </td>
                              <td>
                                <div className="btn-group">
                                  <button className="btn btn-primary" onClick={() => handleViewShowModal(user)}>
                                    Xem
                                  </button>
                                  
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
                {/* Modal hiển thị thông tin chi tiết */}
                {selectedUser && (
                  <Modal show={showModal} onHide={handleCloseModal} centered>
                  <Modal.Header closeButton>
                    <Modal.Title className="w-100 text-center">
                      Thông tin chi tiết người dùng
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="row">
                      <div className="col-md-12">
                      </div>
                      <div className="col-md-6 fw-medium">
                        <div className="checkout-form-list">
                          <label>ID Người dùng</label>
                          <input
                            placeholder=""
                            type="text"
                            value={selectedUser.id}
                            readOnly={true}
                          />
                        </div>
                        </div>
                      <div className="col-md-6 fw-medium">
                        <div className="checkout-form-list">
                          <label>Chức vụ người dùng</label>
                          <input
                            placeholder=""
                            type="text"
                            value={selectedUser.username}
                            readOnly={true}
                          />
                        </div>
                        
                      </div>
                      <div className="col-md-6 fw-medium">
                        <div className="checkout-form-list">
                          <label>Email người dùng</label>
                          <input
                            placeholder=""
                            type="text"
                            value={selectedUser.email}
                            readOnly={true}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 fw-medium">
                        <div className="checkout-form-list">
                          <label>Họ và tên (VNĐ)</label>
                          <input
                            placeholder=""
                            type="text"
                            value={selectedUser.fullname}
                            readOnly={true}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 fw-medium">
                        <div className="checkout-form-list">
                          <label>Số điện thoại</label>
                          <input
                            placeholder=""
                            type="text"
                            value={selectedUser.phone}
                            readOnly={true}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 fw-medium">
                        <div className="checkout-form-list">
                          <label>Trạng thái</label>
                          <input
                            placeholder=""
                            type="text"
                            value={selectedUser.status}
                            readOnly={true}
                          />
                        </div>
                      </div>
                      {/* Các thông tin khác của phiên đấu giá */}
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Đóng
                    </Button>
                  </Modal.Footer>
                </Modal>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransactionWithBuyer;
