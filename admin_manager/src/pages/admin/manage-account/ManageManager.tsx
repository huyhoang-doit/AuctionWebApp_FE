import React, { useEffect, useState } from 'react';
import { Modal, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { getMembers } from '../../../api/UserAPI';
import { User } from '../../../models/User';
import { UserStateView } from './UserStateView';
import './Manager.css';

const ManageManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [managers, setManagers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState(managers);
  const itemsPerPage = 10;

  useEffect(() => {
    getMembers(1, "MANAGER")
      .then((response) =>
        setManagers(response.usersData)
      )
  }, [])

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

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchInput(value);
    if (value === '') {
      setFilteredUsers(managers);
    } else {
      const filtered = managers.filter(manager => manager.id.toString().includes(value));
      setFilteredUsers(filtered);
    }
  };

  const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center" style={{ padding: "50px 0px 0px 5px" }}>
              <div className="col-12">
                {/* Breadcrumb Area */}
                <div className="breadcrumb-area">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/admin">Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item >Quản lý tài khoản</Breadcrumb.Item>
                    <Breadcrumb.Item href="/admin/account/user">Quản lý</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Danh sách quản lý</h4>
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
                  <div className="QA_table right-margin-5px">
                    <table >
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Tên tài khoản</th>
                          <th scope="col">Họ và tên</th>
                          <th scope="col">Email</th>
                          <th scope="col">Số điện thoại</th>
                          <th scope="col">Trạng thái</th>
                          <th scope="col">Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        {managers.map((user) => (
                          <tr key={user.id}>
                            <th scope="row">
                              <a href="#" className="question_content">{user.id}</a>
                            </th>
                            <td>{user.username}</td>
                            <td>{user.fullName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                              <a className={`status_btn ${user.state === 'ACTIVE' ? '' : user.state === 'DISABLE' ? 'bg-error' : 'bg-warn'}`}>
                                <UserStateView state={user.state || ''} />
                              </a>
                            </td>
                            <td>
                              <div className="btn-group">
                                <Link to={`/admin/chi-tiet-nguoi-dung/` + user.id} className="btn btn-sm btn-warning">Xem</Link>
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
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                      />
                    </div>
                  </div>
                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Xác nhận xóa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Bạn có chắc chắn muốn xóa quản lý này ?</Modal.Body>
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

export default ManageManager;
