import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getMembers } from '../../../api/UserAPI';
import { User } from '../../../models/User';
import { UserStateView } from './UserStateView';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { DeleteUserModal } from '../Modal';


const ManageManager = () => {
  const [managers, setManagers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMembers("MANAGER", "", page)
      .then((response) => {
        setManagers(response.usersData);
        setTotalElements(response.totalElements);
        setIsRefresh(false)
      })
      .finally(() => setLoading(false));
  }, [page, isRefresh]);

  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center" style={{ padding: "40px 0px 0px 350px" }}>
              <div className="col-12">
                <div className="breadcrumb-area mb-4">
                  <Link to="/admin">Trang chủ {'  /  '} </Link>
                  <Link to="/admin/danh-sach-quan-ly"> Danh sách quản lý  </Link>
                </div>
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Danh sách quản lý</h4>
                    <div className="box_right d-flex lms_block">
                      <div className="add_button ms-2">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#addcategory" className="btn_1">
                          Thêm tài khoản mới
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
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
                        {loading ? (
                          <tr>
                            <td colSpan={7} className="text-center">
                              <Spinner animation="border" />
                            </td>
                          </tr>
                        ) : managers.length === 0 ? (
                          <tr>
                            <td colSpan={7} className="text-center">Không có dữ liệu</td>
                          </tr>
                        ) : (
                          managers.map((user) => (
                            <tr key={user.id}>
                              <td>
                                {user.id}
                              </td>
                              <td>{user.username}</td>
                              <td>{user.fullName}</td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td>
                                <a className={`status_btn ${user.state === 'VERIFIED'
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
                                  <DeleteUserModal user={user} setIsRefresh={setIsRefresh} />
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </Table>
                    <PaginationControl
                      page={page}
                      between={3}
                      total={totalElements}
                      limit={5}
                      changePage={(page) => setPage(page)}
                      ellipsis={1}
                    />
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

export default ManageManager;
