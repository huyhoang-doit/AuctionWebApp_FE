import React, { useState } from "react";
import EnhancedTable from "./TableComponent";

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
                    <EnhancedTable />
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

export default RequestProduct;
