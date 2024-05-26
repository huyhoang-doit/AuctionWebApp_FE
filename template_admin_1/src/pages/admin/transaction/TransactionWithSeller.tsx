import React from 'react'

const TransactionWithSeller = () => {
  return (
    <>
      <section className="main_content dashboard_part">
        
        <div className="main_content_iner ">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Danh sách giao dịch với người bán</h4>
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
                        <tr>
                          <th scope="row"> <a href="#" className="question_content">Giao dịch 1</a></th>
                          <td>.....</td>
                          <td>.....</td>
                          <td>.....</td>
                          <td>20,000</td>
                          <td><a href="#" className="status_btn">Active</a></td>
                          <td><a href="/admin/view/viewtransactionseller" className="btn btn-sm btn-warning">Xem chi tiết</a><a href="#" className="btn btn-sm btn-danger">Xóa</a></td>
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

export default TransactionWithSeller
