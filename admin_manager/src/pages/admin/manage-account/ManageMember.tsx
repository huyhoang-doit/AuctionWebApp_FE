import { useEffect, useState } from 'react';
import { Modal, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getMembers } from '../../../api/UserAPI';
import { User } from '../../../models/User';
import { UserStateView } from './UserStateView';
import { PaginationControl } from 'react-bootstrap-pagination-control';


const ManageUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [members, setMembers] = useState<User[]>([]);
  const [page, setPage] = useState(1)
  const [totalElements, setTotalElements] = useState(0)

  useEffect(() => {
    getMembers("MEMBER", page)
      .then((response) => {
        setMembers(response.usersData)
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
            <div className="row justify-content-center" style={{ padding: "40px 0px 0px 250px" }}>
              <div className="col-12">
                <div className="breadcrumb-area mb-4">
                  <Link to="/admin">Trang chủ {'  /  '} </Link>
                  <Link to="/admin/danh-sach-nguoi-dung"> Danh sách người dùng  </Link>
                </div>
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Danh sách người dùng</h4>
                    <div className="box_right d-flex lms_block">
                      <div className="add_button ms-2">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#addcategory" className="btn_1">
                          Thêm tài khoản mới
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <table className="table lms_table_active text-center">
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
                        {members.map((user) => (
                          <tr key={user.id}>
                            <td>
                              {user.id}
                            </td>
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
                                <Link to={`/admin/chi-tiet-nguoi-dung/${user.id}`} className="btn btn-sm btn-dark">Xem</Link>
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
                    <Modal.Body>Bạn có chắc chắn muốn xóa người dùng này ?</Modal.Body>
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

export default ManageUser;
