import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChangeEvent, useEffect, useState } from 'react';
import { getDashBoardInformation } from '../../api/DashBoardAPI';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { formatNumber } from '../../utils/formatNumber';
import { Table } from 'react-bootstrap';
import { getTopSpentUser } from '../../api/UserAPI';
import { User } from '../../models/User';
import { Link } from 'react-router-dom';


interface CustomJwtPayload extends JwtPayload {
  authorities: { authority: string }[];
}

export default function Index() {
  const months = [
    { value: 1, label: 'Tháng 1' },
    { value: 2, label: 'Tháng 2' },
    { value: 3, label: 'Tháng 3' },
    { value: 4, label: 'Tháng 4' },
    { value: 5, label: 'Tháng 5' },
    { value: 6, label: 'Tháng 6' },
    { value: 7, label: 'Tháng 7' },
    { value: 8, label: 'Tháng 8' },
    { value: 9, label: 'Tháng 9' },
    { value: 10, label: 'Tháng 10' },
    { value: 11, label: 'Tháng 11' },
    { value: 12, label: 'Tháng 12' }
  ];
  const token = localStorage.getItem("access_token");
  let userRole = '';
  const [selectedYearRegisterAccount, setSelectedYearRegisterAccount] = useState(new Date().getFullYear());
  const [selectedYearGetAuction, setSelectedYearGetAuction] = useState(new Date().getFullYear());
  const [selectedYearGetRevenue, setSelectedYearGetRevenue] = useState(new Date().getFullYear());
  const [selectedYearGetAuctionFailedAndSuccess, setSelectedYearGetAuctionFailedAndSuccess] = useState(new Date().getFullYear());
  const [selectedMonthGetAuctionFailedAndSuccess, setSelectedMonthGetAuctionFailedAndSuccess] = useState(new Date().getMonth() + 1);
  const [selectedYearGetJewelry, setSelectedYearGetJewelry] = useState(new Date().getFullYear());
  const [selectedMonthGetJewelry, setSelectedMonthGetJewelry] = useState(new Date().getMonth() + 1);
  const [selectedYearGetUserJoinAuction, setSelectedYearGetUserJoinAuction] = useState(new Date().getFullYear());
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, index) => currentYear - index);
  const yearsLabel = Array.from({ length: 10 }, (_, index) => currentYear - index).reverse();

  const [totalUser, setTotalUser] = useState(0);
  const [totalUsersVerified, setTotalUsersVerified] = useState(0);
  const [totalUsersActive, setTotalUsersActive] = useState(0);
  const [totalUsersInActive, setTotalUsersInActive] = useState(0);
  const [totalRevenueToday, setTotalRevenueToday] = useState(0);

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

  if (token) {
    const decodedData = jwtDecode<CustomJwtPayload>(token);
    userRole = decodedData.authorities[0].authority;
  }

  const [barData1, setBarData1] = useState({
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    datasets: [
      {
        label: 'VNĐ',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: Array(12).fill(0)
      }
    ]
  });

  const [barData2, setBarData2] = useState({
    labels: ['Chưa định giá', 'Đã định giá', 'Chưa có phiên', 'Có phiên', 'Bàn giao'],
    datasets: [
      {
        label: 'Số lượng',
        backgroundColor: ['#57e7ff', '#9357ff', '#ff56a2', '#f25602', '#FFC107'],
        borderColor: '#FFFFFF',
        borderWidth: 2,
        data: Array(5).fill(0)
      }
    ]
  });

  const [barData3, setBarData3] = useState({
    labels: ['Thành viên', 'Nhân viên', 'Quản Lý', 'Quản trị viên'],
    datasets: [
      {
        label: 'Người dùng',
        backgroundColor: ['#57e7ff', '#9357ff', '#ff56a2', '#f25602'],
        borderColor: '#FFFFFF',
        borderWidth: 2,
        data: Array(4).fill(0)
      }
    ]
  });

  const [barData4, setBarData4] = useState({
    labels: yearsLabel,
    datasets: [
      {
        label: 'VNĐ',
        backgroundColor: '#63c7ff',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: Array(10).fill(0)
      }
    ]
  });

  const [barData5, setBarData5] = useState({
    labels: ['Phiên thất bại', 'Phiên thành công'],
    datasets: [
      {
        label: 'Phiên',
        backgroundColor: ['#DF67C1', '#6AE0BD'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: Array(2).fill(0)
      }
    ]
  });

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

  const [lineData3, setLineData3] = useState({
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    datasets: [
      {
        label: 'Người dùng',
        fill: true,
        tension: 0.4,
        backgroundColor: 'rgba(223,103,193,0.6)',
        borderColor: 'rgba(223,103,193,1)',
        data: []
      }
    ]
  });

  useEffect(() => {
    fetchDashboardData();
  }, [selectedYearRegisterAccount, selectedYearGetAuction, selectedYearGetRevenue,
    selectedYearGetAuctionFailedAndSuccess, selectedMonthGetAuctionFailedAndSuccess,
    selectedMonthGetJewelry, selectedYearGetJewelry,
    selectedYearGetUserJoinAuction]);

  const fetchDashboardData = async () => {
    try {
      const response = await getDashBoardInformation(selectedYearRegisterAccount, selectedYearGetAuction, selectedYearGetRevenue,
        selectedYearGetAuctionFailedAndSuccess, selectedMonthGetAuctionFailedAndSuccess,
        selectedYearGetJewelry, selectedMonthGetJewelry,
        selectedYearGetUserJoinAuction);

      const { totalUser, totalUsersActive, totalUsersInActive, totalRevenueToday, totalJewelryPricing, totalJewelryPriced,
        totalJewelryNotHasAuction, totalJewelryHasAuction, totalJewelryHandover, auctionFailed, auctionSuccess, totalUsersByMonth,
        totalAuctionByMonth, totalMembers, totalStaffs, totalManagers, totalAdmins,
        totalParticipationByMonth, totalRevenueNear10Year, totalRevenueByMonth, totalUsersVerified } = response;

      setTotalUser(totalUser);
      setTotalRevenueToday(totalRevenueToday);
      setTotalUsersActive(totalUsersActive);
      setTotalUsersInActive(totalUsersInActive);
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
            data: [totalJewelryPricing, totalJewelryPriced, totalJewelryNotHasAuction, totalJewelryHasAuction, totalJewelryHandover]
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

      setBarData4(prevData => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: totalRevenueNear10Year
          }
        ]
      }));

      setBarData5(prevData => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: [auctionFailed, auctionSuccess]
          }
        ]
      }));

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

      setLineData3(prevData => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: totalParticipationByMonth
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

  const handleYearDoughnut1 = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(e.target.value);
    setSelectedYearGetAuctionFailedAndSuccess(year);
  };

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const month = parseInt(e.target.value);
    setSelectedMonthGetAuctionFailedAndSuccess(month);
  };

  const handleYearUserJoinChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(e.target.value);
    setSelectedYearGetUserJoinAuction(year);
  };

  const handleMonthGetJewelryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const month = parseInt(e.target.value);
    setSelectedMonthGetJewelry(month);
  };

  const handleYearGetJewelryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(e.target.value);
    setSelectedYearGetJewelry(year);
  };

  return (
    <section className="main_content dashboard_part" >
      <div className="main_content_iner " >
        <div className="container-fluid body_white_bg" style={{ marginTop: '50px' }}>
          <div className="row justify-content-center" style={{ padding: "40px 0px 0px 350px" }}>
            <div className="col-lg-12">
              <div className="single_element">
                <div className="quick_activity">
                  <div className="row">
                    <div className="col-12">
                      <div className="quick_activity_wrap" style={{ width: "100%", display: "block" }}>
                        {userRole === 'MANAGER' &&
                          <>
                            <div className="single_quick_activity">
                              <h4>Doanh thu hôm nay</h4>
                              <h3><span className="counter">{formatNumber(totalRevenueToday)} VNĐ</span> </h3>
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
                              <h4>Số tài khoản chưa kích hoạt</h4>
                              <h3><span className="counter">{totalUsersInActive} Tài khoản</span></h3>
                            </div>
                            <div className="single_quick_activity">
                              <h4>Số tài khoản đã kích hoạt</h4>
                              <h3><span className="counter">{totalUsersActive} Tài khoản</span> </h3>
                            </div>
                            <div className="single_quick_activity">
                              <h4>Số tài khoản đã xác thực</h4>
                              <h3><span className="counter">{totalUsersVerified} Tài khoản</span> </h3>
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
                      <h3 className="mb-0">Lịch sử doanh thu 10 năm gần nhất</h3>
                    </div>
                  </div>
                  <Bar data={barData4} />
                </div>
              </div>
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
                  <div className="box_header  box_header_block">
                    <div className="main-title">
                      <h3 className="mb-0">Tỷ lệ phiên thành công</h3>
                    </div>
                    <div className="box_select d-flex">
                      <select className="nice_Select2" value={selectedMonthGetAuctionFailedAndSuccess} onChange={handleMonthChange}>
                        {months.map((month) => (
                          <option key={month.value} value={month.value}>{month.label}</option>
                        ))}
                      </select>
                      <select className="nice_Select2" value={selectedYearGetAuctionFailedAndSuccess} onChange={handleYearDoughnut1}>
                        {years.map((year) => (
                          <option key={year} value={year}>{`Năm ${year}`}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Bar data={barData5} options={options} />
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block ">
                    <div className="main-title">
                      <h3 className="mb-0">Thống kê trang sức theo trạng thái</h3>
                    </div>
                    <div className="box_select d-flex">
                      <select className="nice_Select2" value={selectedMonthGetJewelry} onChange={handleMonthGetJewelryChange}>
                        {months.map((month) => (
                          <option key={month.value} value={month.value}>{month.label}</option>
                        ))}
                      </select>
                      <select className="nice_Select2" value={selectedYearGetAuction} onChange={handleYearGetJewelryChange}>
                        {years.map((year) => (
                          <option key={year} value={year}>{`Năm ${year}`}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Bar data={barData2} />
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block align-items-center ">
                    <div className="main-title">
                      <h3 className="mb-0">Số lượng phiên đấu giá đã mở</h3>
                    </div>
                    <div className="box_select d-flex justify-content-end">
                      <select className="nice_Select2" value={selectedYearGetAuction} onChange={handleYearGetAuction}>
                        {years.map((year) => (
                          <option key={year} value={year}>{`Năm ${year}`}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Line data={lineData2} options={options} />
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="white_box mb_30 min_430">
                  <div className="box_header  box_header_block align-items-center">
                    <div className="main-title">
                      <h3 className="mb-0">Người dùng tham gia đấu giá</h3>
                    </div>
                    <div className="box_select d-flex justify-content-end">
                      <select className="nice_Select2" value={selectedYearGetUserJoinAuction} onChange={handleYearUserJoinChange}>
                        {years.map((year) => (
                          <option key={year} value={year}>{`Năm ${year}`}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Line data={lineData3} options={options} />
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
                            <td>{user.id}</td>
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
                    <div className="box_select d-flex justify-content-end">
                      <select className="nice_Select2" value={selectedYearRegisterAccount} onChange={handleYearRegisterAccount}>
                        {years.map((year) => (
                          <option key={year} value={year}>{`Năm ${year}`}</option>
                        ))}
                      </select>
                    </div>
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
