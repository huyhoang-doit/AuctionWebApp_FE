import { useEffect, useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { User } from '../../../models/User';
import { UserStateView } from './UserStateView';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { getUsersUnVerify } from '../../../api/UserAPI';

const VerifyUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<User[]>([])
  const [page, setPage] = useState(1)
  const [totalElements, setTotalElements] = useState(0)

  useEffect(() => {
    getUsersUnVerify(page)
      .then((response) => {
        setUsers(response.usersData)
        setTotalElements(response.totalElements)
      }
      )
  }, [page])

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteProduct = () => {
    handleCloseModal();
  };


  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner mb-0">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center" style={{ padding: "40px 0px 0px 350px" }}>
              <div className="col-12">
                <div className="breadcrumb-area mb-4">
                  <Link to="/admin">Trang chủ {'  /  '} </Link>
                  <Link to="/admin/danh-sach-nhan-vien"> Danh sách tài khoản chờ xác thực </Link>
                </div>
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Danh sách tài khoản chờ xác thực</h4>
                  </div>
                  <div >
                    <Table striped bordered hover>
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
                        {users.length !== 0 ? (
                          users.map((user) => (
                            <tr key={user.id}>
                              <td>
                                {user.id}
                              </td>
                              <td>{user.username}</td>
                              <td>{user.fullName}</td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td>
                                <a
                                  className={`status_btn ${user.state === 'VERIFIED'
                                    ? 'bg-success'
                                    : user.state === 'DISABLE'
                                      ? 'bg-error'
                                      : user.state === 'ACTIVE'
                                        ? 'bg-primary'
                                        : 'bg-warn'
                                    }`}>
                                  <UserStateView state={user.state || ''} />
                                </a>
                              </td>
                              <td>
                                <div className="btn-group">
                                  <Link to={`/admin/chi-tiet-nguoi-dung/${user.id}`} className="btn btn-sm btn-dark">Xem</Link>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr className="text-center">
                            <td colSpan={7}>
                              <h5 className='fw-semibold lh-base mt-2'>Hiện không có người dùng chờ xác thực </h5>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </div>
                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Xác nhận xóa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Bạn có chắc chắn muốn xóa nhân viên này ?</Modal.Body>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerifyUser;
