import React, { useState } from 'react';
import { Modal, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RequestProduct = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleDeleteProduct = () => {
    // Thực hiện xóa sản phẩm ở đây
    console.log('Xóa sản phẩm');
    // Sau khi xóa, bạn có thể đóng modal bằng cách gọi handleCloseModal()
    handleCloseModal();
  };

  // Tạo danh sách sản phẩm
  const products = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    code: `SP000${index + 1}`,
    name: `Đồng Hồ Thụy Sĩ ${index + 1}`,
    category: 'Đồng hồ',
    // Thêm các thông tin khác nếu cần
  }));

  // Quy định số sản phẩm mỗi trang là 10
  //useState(1) sẽ tạo ra một biến state mới có tên là currentPage và gán giá trị ban đầu của nó là 1.
  //currentPage là giá trị hiện tại của trang đang được hiển thị.
  //setCurrentPage là hàm để cập nhật giá trị mới cho currentPage.
  //Khi người dùng chuyển đến trang mới, bạn sẽ cập nhật giá trị của currentPage bằng cách gọi hàm setCurrentPage với giá trị mới của trang.
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Tính chỉ số sản phẩm bắt đầu và kết thúc cho trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, products.length);

  // Tạo danh sách sản phẩm cho trang hiện tại
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner ">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center" style={{padding: "50px 0px 0px 100px"}}>
              <div className="col-12">
                <div className="breadcrumb-area">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/admin">Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item >Danh sách các yêu cầu đấu giá</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Các yêu cầu đấu giá</h4>
                    <div className="box_right d-flex lms_block">
                      <div className="serach_field_2">
                        <div className="search_inner">
                          <form>
                            <div className="search_field">
                              <input type="text" placeholder="Tìm kiếm..." />
                            </div>
                            <button type="submit">
                              <i className="ti-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className="add_button ms-2">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#addcategory" className="btn_1">Tìm kiếm</a>
                      </div>
                    </div>
                  </div>
                  <div className="QA_table ">
                    <table className="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">STT</th>
                          <th scope="col">Mã sản phẩm</th>
                          <th scope="col">Tên sản phẩm</th>
                          <th scope="col">Phân loại</th>
                          <th scope="col">....</th>
                          <th scope="col">....</th>
                          <th scope="col">Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentProducts.map((product, index) => (
                          <tr key={product.id}>
                            <th scope="row"> <a href="#" className="question_content">{startIndex + index + 1}</a></th>
                            <td>{product.code}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>.....</td>
                            <td>.....</td>
                            <td>
                              <Link to={`/manager/View/ViewProducts`} className="btn btn-sm btn-warning">Xem</Link>
                              <Button variant="danger" size="sm" onClick={handleShowModal}>Xóa</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>


                  {/* 10 sản phẩm chuyển trang và cộng thêm số trang */}
                  <ul className="pagination" style={{ marginTop: '30px' }}>
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

                  {/* Cuộn kéo chay bình thường không chức năng */}
                  {/* <ul className="pagination" >
          <li className="pagination-item" style={{marginTop: '30px'}} >
          <a href="" className="pagination-item__link ">
           <i className="pagination-item__icon fas fa-angle-left"></i>
         </a>
         </li>

         <li className="pagination-item">
         <a href="" className="pagination-item__link">1</a>
         </li>

         <li className="pagination-item">
         <a href="" className="pagination-item__link">2</a>
         </li>

        <li className="pagination-item">
       <a href="" className="pagination-item__link">3</a>
         </li>

       <li className="pagination-item">
      <a href="" className="pagination-item__link">4</a>
         </li>

         <li className="pagination-item">
         <a href="" className="pagination-item__link">5</a>
     </li>
         <li className="pagination-item">
       <a href="" className="pagination-item__link ">
         <i className="pagination-item__icon fas fa-angle-right"></i>
        </a>
      </li>
         </ul> */}

                  {/* Modal */}
                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Xác nhận xóa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Bạn có chắc chắn muốn xóa sản phẩm này?</Modal.Body>
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
{/* <ul className="pagination" >
<li className="pagination-item">
 <a href="" className="pagination-item__link ">
   <i className="pagination-item__icon fas fa-angle-left"></i>
 </a>
</li>

<li className="pagination-item">
 <a href="" className="pagination-item__link">1</a>
</li>

<li className="pagination-item">
 <a href="" className="pagination-item__link">2</a>
</li>

<li className="pagination-item">
 <a href="" className="pagination-item__link">3</a>
</li>

<li className="pagination-item">
 <a href="" className="pagination-item__link">4</a>
</li>

<li className="pagination-item">
 <a href="" className="pagination-item__link">5</a>
</li>
<li className="pagination-item">
 <a href="" className="pagination-item__link ">
   <i className="pagination-item__icon fas fa-angle-right"></i>
 </a>
</li>
</ul> */}

export default RequestProduct;
