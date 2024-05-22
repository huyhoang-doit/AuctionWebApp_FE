import React from 'react'

const RequestProduct = () => {
  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner ">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Các yêu cầu đấu giá</h4>
                    <div className="box_right d-flex lms_block">
                      <div className="serach_field_2">
                        <div className="search_inner">
                          <form >
                            <div className="search_field">
                              <input type="text" placeholder="Tìm kiếm..." />
                            </div>
                            <button type="submit"> <i className="ti-search"></i> </button>
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
                        <tr>
                          <th scope="row"> <a href="#" className="question_content"> 1</a></th>
                          <td>SP0001</td>
                          <td>Đồng Hồ Thụy Sĩ</td>
                          <td>Đồng hồ</td>
                          <td>.....</td>
                          <td>.....</td>
                          <td><a href="#" className="btn btn-sm btn-warning">Xem</a><a href="#" className="btn btn-sm btn-danger">Xóa</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default RequestProduct
