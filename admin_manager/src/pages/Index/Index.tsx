import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChangeEvent, useEffect, useState } from 'react';
import { getDashBoardInformation } from '../../api/DashBoardAPI';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { formatNumber } from '../../utils/formatNumber';

export default function Index() {
  const [selectedYearRegisterAccount, setSelectedYearRegisterAccount] = useState(new Date().getFullYear());
  const [selectedYearGetAuction, setSelectedYearGetAuction] = useState(new Date().getFullYear());
  const [selectedYearGetRevenue, setSelectedYearGetRevenue] = useState(new Date().getFullYear());
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, index) => currentYear - index);

  const [totalUser, setTotalUser] = useState(0);
  const [totalUsersActive, setTotalUsersActive] = useState(0);
  const [totalUsersInActive, setTotalUsersInActive] = useState(0);
  const [totalRevenueToday, setTotalRevenueToday] = useState(0);
  const [totalJewelryActive, setTotalJewelryActive] = useState(0);
  const [totalAuctions, setTotalAuctions] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  // Dữ liệu cho biểu đồ Bar
  const [barData1, setBarData1] = useState({
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    datasets: [
      {
        label: 'VNĐ',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  });


  // Dữ liệu cho biểu đồ Doughnut
  const [doughnutData1, setDoughnutData1] = useState({
    labels: ['Phiên thất bại', 'Phiên thành công'],
    datasets: [
      {
        label: '%',
        backgroundColor: ['#DF67C1', '#6AE0BD'],
        data: [0, 0]
      }
    ]
  });

  // Dữ liệu cho biểu đồ Doughnut
  const [doughnutData2, setDoughnutData2] = useState({
    labels: ['Người dùng tham gia', 'Người dùng không tham gia'],
    datasets: [
      {
        label: '%',
        backgroundColor: ['#6495ED', '#DE3163'],
        data: [0, 0]
      }
    ]
  });

  const [doughnutData3, setDoughnutData3] = useState({
    labels: ['Chờ phê duyệt', 'Đã phê duyệt'],
    datasets: [
      {
        label: '%',
        backgroundColor: ['#6495ED', '#DE3163'],
        data: [0, 0]
      }
    ]
  });

  // Dữ liệu cho biểu đồ Line
  const [lineData1, setLineData1] = useState({
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    datasets: [
      {
        label: 'Người dùng',
        fill: true,
        tension: 0.4,
        backgroundColor: 'rgba(166, 109, 212, 0.6)',
        borderColor: '#a66dd4',
        data: []
      }
    ]
  });

  // Dữ liệu cho biểu đồ Line
  const [lineData2, setLineData2] = useState({
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    datasets: [
      {
        label: 'Phiên',
        fill: true,
        tension: 0.4,
        backgroundColor: 'rgba(99, 199, 255, 0.6)',
        borderColor: 'rgba(99, 199, 255, 1)',
        data: []
      }
    ]
  });

  const token = localStorage.getItem("access_token");
  let userRole = '';
  interface CustomJwtPayload extends JwtPayload {
    authorities: { authority: string }[];
  }
  if (token) {
    const decodedData = jwtDecode<CustomJwtPayload>(token);
    userRole = decodedData.authorities[0].authority;
  }

  useEffect(() => {
    fetchDashboardData();
  }, [selectedYearRegisterAccount, selectedYearGetAuction, selectedYearGetRevenue]);

  const fetchDashboardData = async () => {
    try {
      const response = await getDashBoardInformation(selectedYearRegisterAccount, selectedYearGetAuction, selectedYearGetRevenue);
      const { totalUser, totalUsersActive, totalUsersInActive, totalRevenueToday, totalAuctions, totalJewelryActive, totalJewelryWaitApproving,
        percentAuctionFailed, percentAuctionSuccess, totalUsersByMonth, totalAuctionByMonth, 
        participationRate, notParticipationRate, totalRevenue, totalRevenueByMonth } = response;

      setTotalUser(totalUser);
      setTotalAuctions(totalAuctions);
      setTotalRevenue(totalRevenue);
      setTotalRevenueToday(totalRevenueToday);
      setTotalUsersActive(totalUsersActive);
      setTotalUsersInActive(totalUsersInActive);
      setTotalJewelryActive(totalJewelryActive)

      setBarData1(prevData => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: totalRevenueByMonth
          }
        ]
      }));

      setDoughnutData1({
        ...doughnutData1,
        datasets: [
          {
            ...doughnutData1.datasets[0],
            data: [percentAuctionFailed, percentAuctionSuccess]
          }
        ]
      });

      setDoughnutData2({
        ...doughnutData2,
        datasets: [
          {
            ...doughnutData2.datasets[0],
            data: [participationRate, notParticipationRate]
          }
        ]
      });

      setDoughnutData3({
        ...doughnutData3,
        datasets: [
          {
            ...doughnutData3.datasets[0],
            data: [totalJewelryActive, totalJewelryWaitApproving]
          }
        ]
      });

      setLineData1(prevData => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: totalUsersByMonth
          }
        ]
      }));

      setLineData2(prevData => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: totalAuctionByMonth
          }
        ]
      }));
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      // Handle error as needed
    }
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  const handleYearRegisterAccount = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(e.target.value);
    setSelectedYearRegisterAccount(year);
  };

  const handleYearGetAuction = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(e.target.value);
    setSelectedYearGetAuction(year);
  };

  const handleYearRevenue = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(e.target.value);
    setSelectedYearGetRevenue(year);
  };

  return (
    <section className="main_content dashboard_part" >
      <div className="main_content_iner " >
        <div className="container-fluid body_white_bg " style={{ marginTop: '100px' }}>
          <div className="row justify-content-center" style={{ padding: "40px 0px 0px 350px" }}>
            <div className="col-lg-12">
              <div className="single_element">
                <div className="quick_activity">
                  <div className="row">
                    <div className="col-12">
                      <div className="quick_activity_wrap">
                        {userRole === 'MANAGER' &&
                          <>
                            <div className="single_quick_activity">
                              <h4>Tổng doanh thu</h4>
                              <h3><span className="counter">{formatNumber(totalRevenue)} VNĐ</span></h3>
                            </div>
                            <div className="single_quick_activity">
                              <h4>Doanh thu hôm nay</h4>
                              <h3><span className="counter">{formatNumber(totalRevenueToday)} VNĐ</span> </h3>
                            </div>
                            <div className="single_quick_activity">
                              <h4>Tổng số phiên đấu giá</h4>
                              <h3><span className="counter">{totalAuctions} Phiên</span> </h3>
                            </div>
                            <div className="single_quick_activity">
                              <h4>Số lượng trang sức đã qua phê duyệt</h4>
                              <h3><span className="counter">{totalJewelryActive} Trang sức</span></h3>
                            </div>
                          </>
                        }
                        {userRole === 'ADMIN' &&
                          <>
                            <div className="single_quick_activity">
                              <h4>Số lượng tài khoản</h4>
                              <h3><span className="counter">{totalUser} Tài khoản</span> </h3>
                            </div>
                            <div className="single_quick_activity">
                              <h4>Số tài khoản đã kích hoạt</h4>
                              <h3><span className="counter">{totalUsersActive} Tài khoản</span> </h3>
                            </div>
                            <div className="single_quick_activity">
                              <h4>Số tài khoản chưa kích hoạt</h4>
                              <h3><span className="counter">{totalUsersInActive} Tài khoản</span> </h3>
                            </div>
                          </>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {userRole === 'MANAGER' && <>
              <div className="col-lg-12 col-xl-6">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block ">
                    <div className="main-title">
                      <h3 className="mb-0">Doanh thu theo tháng</h3>
                    </div>
                    <div className="box_select d-flex">
                      <select className="nice_Select2" value={selectedYearGetRevenue} onChange={handleYearRevenue}>
                        {years.map((year) => (
                          <option key={year} value={year}>{`Năm ${year}`}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Bar data={barData1} />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block">
                    <div className="main-title">
                      <h3 className="mb-0">Tỷ lệ phiên thành công</h3>
                    </div>
                  </div>
                  <Doughnut data={doughnutData1} />
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block align-items- ">
                    <div className="main-title">
                      <h3 className="mb-0">Số lượng phiên đấu giá đã mở</h3>
                    </div>
                  </div>
                  <div className="box_select d-flex justify-content-end mb-4">
                    <select className="nice_Select2" value={selectedYearGetAuction} onChange={handleYearGetAuction}>
                      {years.map((year) => (
                        <option key={year} value={year}>{`Năm ${year}`}</option>
                      ))}
                    </select>
                  </div>
                  <Line data={lineData2} options={options} />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block">
                    <div className="main-title">
                      <h3 className="mb-0">Tỷ lệ người dùng tham gia đấu giá</h3>
                    </div>
                  </div>
                  <Doughnut data={doughnutData2} />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block">
                    <div className="main-title">
                      <h3 className="mb-0">Tổng quan trạng thái trang sức</h3>
                    </div>
                  </div>
                  <Doughnut data={doughnutData3} />
                </div>
              </div>
            </>
            }
            {userRole === 'ADMIN' && <>
              <div className="col-lg-12 col-xl-6">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block">
                    <div className="main-title">
                      <h3 className="mb-0">Số lượng người dùng đã đăng kí</h3>
                    </div>
                  </div>
                  <div className="box_select d-flex justify-content-end mb-4">
                    <select className="nice_Select2" value={selectedYearRegisterAccount} onChange={handleYearRegisterAccount}>
                      {years.map((year) => (
                        <option key={year} value={year}>{`Năm ${year}`}</option>
                      ))}
                    </select>
                  </div>
                  <Line data={lineData1} options={options} />
                </div>
              </div>
            </>}
          </div>
        </div>
      </div>
    </section>
  );
}
