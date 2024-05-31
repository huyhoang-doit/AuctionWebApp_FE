import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Index = () => {
  // Dữ liệu cho biểu đồ Bar
  const barData = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11','Tháng 12'],
    datasets: [
      {
        label: 'Phiên đấu giá',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [70, 66, 73, 81, 92, 200, 157, 183, 261, 275, 341,584]
      }
    ]
  };

  // Dữ liệu cho biểu đồ Doughnut
  const doughnutData = {
    labels: ['Đấu giá thất bại', 'Đấu giá thành công'],
    datasets: [
      {
        label: '%',
        backgroundColor: ['#DF67C1', '#6AE0BD'],
        data: [5, 95]
      }
    ]
  };

  // Dữ liệu cho biểu đồ Line
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Người',
        fill: false,
        tension: 0.1, 
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 63, 71, 83, 94, 96]
      }
    ]
  };

  return (
    <div>
      <section className="main_content dashboard_part">
        <div className="main_content_iner ">
          <div className="container-fluid pr_30 body_white_bg" style={{marginTop : '110px'}}>
            <div className="row justify-content-center px-5 py-3">
              <div className="col-lg-12">
                <div className="single_element">
                  <div className="quick_activity">
                    <div className="row">
                      <div className="col-12">
                        <div className="quick_activity_wrap">
                          <div className="single_quick_activity">
                            <h4>Doanh thu tuần qua</h4>
                            <h3>$ <span className="counter">5,79,000</span> </h3>
                          </div>
                          <div className="single_quick_activity">
                            <h4>Số phiên đấu giá tuần qua</h4>
                            <h3><span className="counter">79 Phiên</span> </h3>
                          </div>
                          <div className="single_quick_activity">
                            <h4>Số lượng người dùng</h4>
                            <h3><span className="counter">920 Người</span> </h3>
                          </div>
                          <div className="single_quick_activity">
                            <h4></h4>
                            <h3>Số lượng ...<span className="counter">1000</span> </h3>
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
                      <h3 className="mb-0">Phiên đấu giá</h3>
                    </div>
                    <div className="box_select d-flex">
                      <select className="nice_Select2 mr_5">
                        <option value="1">Hằng tuần</option>
                        <option value="2">Hằng tháng</option>
                      </select>
                      <select className="nice_Select2 ">
                        <option value="1">Năm ngoái</option>
                        <option value="1">Năm nay</option>
                      </select>
                    </div>
                  </div>
                  <Bar data={barData} />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3 ">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block">
                    <div className="main-title">
                      <h3 className="mb-0">Tỷ lệ giao dịch</h3>
                    </div>
                  </div>
                  <Doughnut data={doughnutData} />
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block">
                    <div className="main-title">
                      <h3 className="mb-0">Số lượng người dùng</h3>
                    </div>
                  </div>
                  <Line data={lineData} />
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block align-items- ">
                    <div className="main-title">
                      <h3 className="mb-0">Cost of goods / Services</h3>
                    </div>
                    <div className="title_info">
                      <p>1 Jan 2020 to 31 Dec 2020 </p>
                      <div className="legend_style text-end">
                        <li> <span style={{ backgroundColor: '#A4A1FB' }}></span> Services</li>
                        <li className="inactive"> <span style={{ backgroundColor: '#A4A1FB' }}></span> Avarage
                        </li>
                      </div>
                    </div>
                  </div>
                  <Line data={lineData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
