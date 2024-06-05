import React, { useEffect, useState } from "react";
import { Modal, Button, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMembers } from "../../../api/UserAPI";
import { User } from "../../../models/User";
import { UserStateView } from "./UserStateView";

const StaffList = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [staffs, setStaffs] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const itemsPerPage = 10; // Số mục mỗi trang

  useEffect(() => {
    getMembers(1, "STAFF").then((response) => {
      setStaffs(response.usersData);
      setFilteredUsers(response.usersData);
    });
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleDeleteProduct = () => {
    console.log("Xóa sản phẩm");
    handleCloseModal();
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchInput(value);
    if (value === "") {
      setFilteredUsers(staffs);
    } else {
      const filtered = staffs.filter((staff) =>
        staff.id.toString().includes(value)
      );
      setFilteredUsers(filtered);
    }
    setCurrentPage(1); // Reset lại trang đầu tiên khi tìm kiếm
  };

  // Tính chỉ số bắt đầu và kết thúc cho trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredUsers.length);

  // Lấy danh sách nhân viên cho trang hiện tại
  const currentStaffs = filteredUsers.slice(startIndex, endIndex);

  const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div
              className="row justify-content-center"
              style={{ padding: "50px 0px 0px 100px" }}
            >
              <div className="col-12">
                {/* Khu vực Breadcrumb */}
                <div className="breadcrumb-area">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/manager">Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item href="/manager/account/staff">
                      Nhân viên
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Danh sách nhân viên</h4>
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
                            <button
                              type="submit"
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="ti-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className="add_button ms-2">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#addcategory"
                          className="btn_1"
                        >
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
                        {currentStaffs.map((user, index) => (
                          <tr key={startIndex + index}>
                            <th scope="row">
                              <a href="#" className="question_content">
                                {startIndex + index + 1}
                              </a>
                            </th>
                            <td>{user.username}</td>
                            <td>{user.fullName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                              <a
                                className={`status_btn ${
                                  user.state === "ACTIVE"
                                    ? ""
                                    : user.state === "DISABLE"
                                    ? "bg-error"
                                    : "bg-warn"
                                }`}
                              >
                                <UserStateView state={user.state || ""} />
                              </a>
                            </td>
                            <td>
                              <div className="btn-group">
                                <Link
                                  to={`/admin/chi-tiet-nguoi-dung/` + user.id}
                                  className="btn btn-sm btn-warning"
                                >
                                  Xem
                                </Link>
                                <Button
                                  variant="danger"
                                  size="sm"
                                  onClick={handleShowModal}
                                >
                                  Xóa
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div
                      className="pagination-container"
                      style={{ marginTop: "30px" }}
                    >
                      <ul className="pagination">
                        <li className="pagination-item">
                          <a
                            href="#"
                            className="pagination-item__link"
                            onClick={() =>
                              setCurrentPage((prevPage) =>
                                Math.max(prevPage - 1, 1)
                              )
                            }
                          >
                            <i className="pagination-item__icon fas fa-angle-left"></i>
                          </a>
                        </li>
                        {Array.from({ length: pageCount }, (_, i) => (
                          <li key={i} className="pagination-item">
                            <a
                              href="#"
                              className={`pagination-item__link ${
                                currentPage === i + 1 ? "active" : ""
                              }`}
                              onClick={() => setCurrentPage(i + 1)}
                            >
                              {i + 1}
                            </a>
                          </li>
                        ))}
                        <li className="pagination-item">
                          <a
                            href="#"
                            className="pagination-item__link"
                            onClick={() =>
                              setCurrentPage((prevPage) =>
                                Math.min(prevPage + 1, pageCount)
                              )
                            }
                          >
                            <i className="pagination-item__icon fas fa-angle-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Xác nhận xóa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Bạn có chắc chắn muốn xóa nhân viên này ?
                    </Modal.Body>
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

export default StaffList;
