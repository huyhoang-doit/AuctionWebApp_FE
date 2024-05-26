import Header from '../../../layouts/admin/components/Header'
import Footer from '../../../layouts/admin/components/Footer'
import Navbar from '../../../layouts/staff/Navbar'

const Index = () => {
  return (
    <div>
      <Navbar />
      <section className="main_content dashboard_part">

        <div className="container-fluid g-0">
          <div className="row">
            <div className="col-lg-12 p-0">
              <Header />
            </div>
          </div>
        </div>

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
                            <h4>Số lượng trang sức được gửi đến</h4>
                            <h5>Trong tuần</h5>
                            <h3><span className="counter">79</span> </h3>
                          </div>
                          <div className="single_quick_activity">
                            <h4>Số lượng yêu cầu đang đợi phê duyệt</h4>
                            <h5>Trong tuần</h5>
                            <h3><span className="counter">9</span> </h3>
                          </div>
                          <div className="single_quick_activity">
                            <h4>Số lượng người dùng</h4>
                            <p>...</p>
                            <h3><span className="counter">92</span> </h3>
                          </div>
                          <div className="single_quick_activity">
                            <h4>Số lượng trang sức đã được bàn giao</h4>
                            <h5>Trong tuần</h5>
                            <h3><span className="counter">100</span> </h3>
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

        <Footer />
      </section>
    </div>
  )
}

export default Index
