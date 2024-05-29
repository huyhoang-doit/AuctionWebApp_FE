import { Link } from "react-router-dom";
import { useState } from "react"; // Thêm useState để quản lý trang hiện tại

const AuctionsList = () => {
  // Tạo một mảng lưu các phần tử để biểu diễn danh sách sản phẩm
  const products = Array.from({ length: 20 }, (_, index) => index + 1);
  
  
  //=== Quy định sản phẩm mỗi trang là 10
  const itemsPerPage = 10; // Số sản phẩm mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // Sử dụng useState để lưu trạng thái của trang hiện tại.

  // Tính chỉ số sản phẩm bắt đầu và kết thúc cho trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, products.length);

  // Tạo danh sách sản phẩm cho trang hiện tại
  const currentProducts = products.slice(startIndex, endIndex);  //Sử dụng slice để lấy danh sách sản phẩm cho trang hiện tại.
  //===
  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner ">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Các phiên đấu giá</h4>
                    <div className="box_right d-flex lms_block">
                      <div className="serach_field_2">
                        <div className="search_inner">
                          <form>
                            <div className="search_field">
                              <input type="text" placeholder="Tìm kiếm..." />
                            </div>
                            <button type="submit">
                              {" "}
                              <i className="ti-search"></i>{" "}
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
                          Tìm kiếm
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="QA_table ">
                    <table className="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">STT</th>
                          <th scope="col">Mã phiên</th>
                          <th scope="col">Tên phiên</th>
                          <th scope="col">....</th>
                          <th scope="col">....</th>
                          <th scope="col">Trạng thái</th>
                          <th scope="col">Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentProducts.map((product, index) => (
                          <tr key={startIndex + index}>
                            <th scope="row">
                              {" "}
                              <a href="#" className="question_content">
                                {startIndex + index + 1}
                              </a>
                            </th>
                            <td>PDG000{product}</td>
                            <td>Đấu giá Đồng hồ</td>
                            <td>.....</td>
                            <td>.....</td>
                            <td>
                              <a href="#" className="status_btn">
                                WAITING
                              </a>
                            </td>
                            <td>
                              <Link
                                to={"/manager/View/ViewAuctionsList"}
                                className="btn btn-sm btn-warning"
                              >
                                Xem
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <ul className="pagination" style={{marginTop: '30px'}}> {/* Thêm margin-top theo yêu cầu */}
                    <li className="pagination-item">
                      <a
                        href="#"
                        className="pagination-item__link "
                        onClick={() =>
                          setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                        }
                      >
                        <i className="pagination-item__icon fas fa-angle-left"></i>
                      </a>
                    </li>

                    {Array.from({ length: Math.ceil(products.length / itemsPerPage) }, (_, i) => (
                      <li key={i} className="pagination-item">
                        <a
                          href="#"
                          className={`pagination-item__link ${currentPage === i + 1 ? 'active' : ''}`}
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </a>
                      </li>
                    ))}

                    <li className="pagination-item">
                      <a
                        href="#"
                        className="pagination-item__link "
                        onClick={() =>
                          setCurrentPage((prevPage) =>
                            Math.min(prevPage + 1, Math.ceil(products.length / itemsPerPage))
                          )
                        }
                      >
                        <i className="pagination-item__icon fas fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuctionsList;

