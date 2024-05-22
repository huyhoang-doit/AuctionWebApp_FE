import React from 'react'

const Index = () => {
  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner ">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="single_element">
                  <div className="quick_activity">
                    <div className="row">
                      <div className="col-12">
                        <div className="quick_activity_wrap">
                          <div className="single_quick_activity">
                            <h4>Tổng số phiên đấu giá</h4>
                            <h3> <span className="counter">79</span> </h3>
                            <p>Saved 25%</p>
                          </div>
                          <div className="single_quick_activity">
                            <h4>Số phiên đấu giá đang diễn ra</h4>
                            <h3><span className="counter">9</span> </h3>
                            <p>Saved 25%</p>
                          </div>
                          <div className="single_quick_activity">
                            <h4>Số phiên đấu giá sắp diễn ra</h4>
                            <h3><span className="counter">2</span> </h3>
                            <p>Saved 25%</p>
                          </div>
                          <div className="single_quick_activity">
                            <h4>Số lượng sản phẩm hiện có</h4>
                            <h3><span className="counter">1000</span> </h3>
                            <p>Saved 65%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block ">
                    <div className="main-title">
                      <h3 className="mb-0">Doanh thu theo tháng</h3>
                      <span>Avg. $5,309</span>
                    </div>
                    <div className="box_select d-flex">
                      <select className="nice_Select2 mr_5">
                        <option value="1">Monthly</option>
                        <option value="1">Monthly</option>
                      </select>
                      <select className="nice_Select2 ">
                        <option value="1">Last Year</option>
                        <option value="1">this Year</option>
                      </select>
                    </div>
                  </div>
                  <div id="bar_active"></div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3 ">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block">
                    <div className="main-title">
                      <h3 className="mb-0">Tỷ lệ giao dịch</h3>
                    </div>
                  </div>
                  <div id="radial_2"></div>
                  <div className="radial_footer">
                    <div className="radial_footer_inner d-flex justify-content-between">
                      <div className="left_footer">
                        <h5> <span style={{ backgroundColor: '#EDECFE' }}></span> Thất bại</h5>
                      </div>
                      <div className="left_footer">
                        <h5> <span style={{ backgroundColor: '#A4A1FB' }}></span> Thành công</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="white_box min_430">
                  <div className="box_header  box_header_block">
                    <div className="main-title">
                      <h3 className="mb-0">% of Expenses Budget</h3>
                    </div>
                  </div>
                  <div id="radial_1"></div>
                  <div className="radial_footer">
                    <div className="radial_footer_inner d-flex justify-content-between">
                      <div className="left_footer">
                        <h5> <span style={{ backgroundColor: '#EDECFE' }}></span> Blance</h5>
                        <p>-$18,570</p>
                      </div>
                      <div className="left_footer">
                        <h5> <span style={{ backgroundColor: '#A4A1FB' }}></span> Blance</h5>
                        <p>$31,430</p>
                      </div>
                    </div>
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

export default Index
