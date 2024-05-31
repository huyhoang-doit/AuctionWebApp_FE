import React, { useState } from 'react';
import { Modal, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './TransactionWithBuyer.css';
const users = [
  { id: 1, username: 'Nhân viên 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 2, username: 'Nhân viên 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 3, username: 'Nhân viên 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 4, username: 'Nhân viên 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 5, username: 'Nhân viên 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 6, username: 'Nhân viên 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 7, username: 'Nhân viên 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 8, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 9, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 10, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 11, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 12, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 13, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 14, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 15, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 16, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 17, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 18, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 19, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 20, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 14, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 14, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 14, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 14, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 14, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 14, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 14, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 14, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 14, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
    { id: 14, username: 'Quản lý 1', fullname: 'Lê Quang Sơn', email: 'lequangson@gmail.com', phone: '0999990999', status: 'Active' },
];

const TransactionWithUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
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

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchInput(value);
    if (value === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => user.id.toString().includes(value));
      setFilteredUsers(filtered);
    }
  };

  const offset = currentPage * itemsPerPage;
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
                    <Breadcrumb.Item >Lịch sử giao dịch</Breadcrumb.Item>
                    <Breadcrumb.Item href="/admin/account/user">Giao dịch với người tham gia</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Danh sách giao dịch với người tham gia</h4>
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
                  <div className="QA_table">
                    <table className="table lms_table_active">
                      <thead>
                        <tr>
                        <th scope="col">ID</th>
                          <th scope="col">....</th>
                          <th scope="col">....</th>
                          <th scope="col">....</th>
                          <th scope="col">Tổng số tiền</th>
                          <th scope="col">Trạng thái</th>
                          <th scope="col">Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentPageData.map((user) => (
                          <tr key={user.id}>
                            <th scope="row">
                              <a href="#" className="question_content">{user.id}</a>
                            </th>
                            <td>{user.username}</td>
                            <td>{user.fullname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                              <a  className="status_btn">{user.status}</a>
                            </td>
                            <td>
                              <div className="btn-group">
                                <Link to="/admin/view/ViewTransactionUser" className="btn btn-sm btn-warning">Xem</Link>
                                <Button variant="danger" size="sm" onClick={handleShowModal}>Xóa</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="pagination-container">
                      <ReactPaginate
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                      />
                    </div>
                  </div>
                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Xác nhận xóa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Bạn có chắc chắn muốn xóa lịch sử giao dịch này ?</Modal.Body>
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
        </div>
      </section>
    </>
  );
};

export default TransactionWithUser;
