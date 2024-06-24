import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChangeEvent, useEffect, useState } from 'react';
import { getDashBoardInformation } from '../../api/DashBoardAPI';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { formatNumber } from '../../utils/formatNumber';
import { Table } from 'react-bootstrap';
import { getTopSpentUser } from '../../api/UserAPI';
import { User } from '../../models/User';
import { Link } from 'react-router-dom';
export default function Index() {
  const [selectedYearRegisterAccount, setSelectedYearRegisterAccount] = useState(new Date().getFullYear());
  const [selectedYearGetAuction, setSelectedYearGetAuction] = useState(new Date().getFullYear());
  const [selectedYearGetRevenue, setSelectedYearGetRevenue] = useState(new Date().getFullYear());
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, index) => currentYear - index);

  const [totalUser, setTotalUser] = useState(0);
  const [totalUsersVerified, setTotalUsersVerified] = useState(0);
  const [totalUsersActive, setTotalUsersActive] = useState(0);
  const [totalUsersInActive, setTotalUsersInActive] = useState(0);
  const [totalRevenueToday, setTotalRevenueToday] = useState(0);
  const [totalJewelryActive, setTotalJewelryActive] = useState(0);
  const [totalAuctions, setTotalAuctions] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getTopSpentUser()
      .then((response) => {
        setUsers(response);

      })
      .catch(() => {
        setUsers([])
      });
  }, [])

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

  // Dữ liệu cho biểu đồ Bar
  const [barData2, setBarData2] = useState({
    labels: ['Đã phê duyệt', 'Chưa phê duyệt', 'Đang đấu giá'],
    datasets: [
      {
        label: 'Số lượng',
        backgroundColor: ['#57e7ff', '#9357ff', '#ff56a2'],
        borderColor: '#FFFFFF',
        borderWidth: 2,
        data: [0, 0, 0]
      }
    ]
  });

  // Dữ liệu cho biểu đồ Bar
  const [barData3, setBarData3] = useState({
    labels: ['Thành viên', 'Nhân viên', 'Quản Lý', 'Quản trị viên'],
    datasets: [
      {
        label: 'Người dùng',
        backgroundColor: ['#57e7ff', '#9357ff', '#ff56a2', '#f25602'],
        borderColor: '#FFFFFF',
        borderWidth: 2,
        data: [0, 0, 0, 0]
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
        totalAuctionJewelry, percentAuctionFailed, percentAuctionSuccess, totalUsersByMonth, totalAuctionByMonth, totalMembers, totalStaffs, totalManagers, totalAdmins,
        participationRate, notParticipationRate, totalRevenue, totalRevenueByMonth, totalUsersVerified } = response;

      setTotalUser(totalUser);
      setTotalAuctions(totalAuctions);
      setTotalRevenue(totalRevenue);
      setTotalRevenueToday(totalRevenueToday);
      setTotalUsersActive(totalUsersActive);
      setTotalUsersInActive(totalUsersInActive);
      setTotalJewelryActive(totalJewelryActive);
      setTotalUsersVerified(totalUsersVerified);

      setBarData1(prevData => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: totalRevenueByMonth
          }
        ]
      }));

      setBarData2(prevData => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: [totalJewelryActive, totalJewelryWaitApproving, totalAuctionJewelry]
          }
        ]
      }));

      setBarData3(prevData => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: [totalMembers, totalStaffs, totalManagers, totalAdmins]
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
                              <h4>Số tài khoản đã xác minh</h4>
                              <h3><span className="counter">{totalUsersVerified} Tài khoản</span> </h3>
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
              <div className="col-lg-12 col-xl-6">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block ">
                    <div className="main-title">
                      <h3 className="mb-0">Thống kê trang sức theo trạng thái</h3>
                    </div>
                  </div>
                  <Bar data={barData2} />
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
                      <h3 className="mb-0">Tỷ lệ phiên thành công</h3>
                    </div>
                  </div>
                  <Doughnut data={doughnutData1} />
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
              <div className="col-12">
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4> Những người dùng hàng đầu</h4>
                    <div className="box_right d-flex lms_block">
                      <div className="serach_field_2">
                      </div>
                      <div className="add_button ms-2 ">
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Ảnh đại diện</th>
                          <th scope="col">Tên tài khoản</th>
                          <th scope="col" style={{ width: '15%' }}>Họ và tên</th>
                          <th scope="col">Email</th>
                          <th scope="col">Số điện thoại</th>
                          <th scope="col">Tổng tiền đã thanh toán</th>
                          <th scope="col">Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id}>
                            <td>
                              {user.id}
                            </td>
                            <td><img src={user.avatar} alt='' style={{ width: "60px" }} /></td>
                            <td>{user.username}</td>
                            <td>{user.fullName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td className='fw-bold'>{formatNumber(user.totalSpent)} VNĐ</td>
                            <td className='fw-bold'>
                              <Link to={`/manager/chi-tiet-nguoi-dung/${user.id}`} className='btn btn-dark' onClick={() => scrollTo(0, 0)}>
                                Xem chi tiết
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
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
              <div className="col-lg-12 col-xl-6">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block ">
                    <div className="main-title">
                      <h3 className="mb-0">Thống kê số lượng người dùng theo quyền</h3>
                    </div>
                  </div>
                  <Bar data={barData3} />
                </div>
              </div>
            </>}
          </div>
        </div>
      </div>
    </section>
  );
}
