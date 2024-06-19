import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopSpentUser } from '../../../api/UserAPI';
import { User } from '../../../models/User';
import { formatNumber } from '../../../utils/formatNumber';
import { Table } from 'react-bootstrap';

export default function TopMember() {
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

    return (
        <><section className="main_content dashboard_part">
            <div className="main_content_iner">
                <div className="container-fluid plr_30 body_white_bg pt_30">
                    <div className="row justify-content-center" style={{ padding: "40px 0px 0px 350px" }}>
                        <div className="col-12">
                            <div className="breadcrumb-area mb-4">
                                <Link to="/manager">Trang chủ {'  /  '} </Link>
                                <Link to="/manager/giao-dich/nguoi-mua">Những người dùng hàng đầu</Link>
                            </div>
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
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user) => (
                                                <tr key={user.id}>
                                                    <td>
                                                        {user.id}
                                                    </td>
                                                    <td><img src={user.avatar} alt='' style={{width: "60px"}} /></td>
                                                    <td>{user.username}</td>
                                                    <td>{user.fullName}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone}</td>
                                                    <td className='fw-bold'>{formatNumber(user.totalSpent)} VNĐ</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
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
