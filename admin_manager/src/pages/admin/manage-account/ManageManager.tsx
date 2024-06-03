import React, { useEffect, useState } from 'react';
import { Modal, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getMembers } from '../../../api/UserAPI';
import { User } from '../../../models/User';
import { UserStateView } from './UserStateView';
import { PaginationControl } from 'react-bootstrap-pagination-control';


const ManageManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [managers, setManagers] = useState<User[]>([])

  const [page, setPage] = useState(1)
  const [totalElements, setTotalElements] = useState(0)

  useEffect(() => {
    getMembers("MANAGER", 1)
      .then((response) => {
        setManagers(response.usersData)
        setTotalElements(response.totalElements)
      })
  }, [page])

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

  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner mb-0">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center" style={{ padding: "50px 0px 0px 100px" }}>
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
                              // onChange={handleSearchInput}
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
        <PaginationControl
          page={page}
          between={3}
          total={totalElements}
          limit={5}
          changePage={(page) => {
            setPage(page)
          }}
          ellipsis={1}
        />
      </section>
    </>
  );
};

export default ManageManager;
