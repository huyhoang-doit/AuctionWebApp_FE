import { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Transaction } from '../../../models/Transaction';
import { getOverdueTransactions } from '../../../api/TransactionAPI';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { formatNumber } from '../../../utils/formatNumber';
import { DeleteTransactionModal, ViewTransactionModal } from '../Modal/Modal';
import { formatDateString } from '../../../utils/formatDateString';
import { TypeTransaction } from './TypeTransaction';


const TransactionsOverdue = () => {
    // const [searchInput, setSearchInput] = useState('');
    // const [filteredUsers, setFilteredUsers] = useState(users);
    //
    const [listTransactions, setListTransactions] = useState<Transaction[]>([])
    const [page, setPage] = useState(1);
    const [totalElements, setTotalElements] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        try {
            getOverdueTransactions(page)
                .then((response) => {
                    setListTransactions(response.transactions);
                    setTotalElements(response.totalElements);
                })
                .catch(() => {
                    setListTransactions([])
                });
        } catch (error) {
            // console.error(error);
        }
        setLoading(false)
    }, [page])


    // const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   const value = event.target.value;
    //   setSearchInput(value);
    //   setLoading(true);
    //   if (value === '') {
    //     setFilteredUsers(users);
    //   } else {
    //     const filtered = users.filter(user =>
    //       user.id.toString().includes(value) ||
    //       user.username.toLowerCase().includes(value.toLowerCase()) ||
    //       user.fullname.toLowerCase().includes(value.toLowerCase()) ||
    //       user.email.toLowerCase().includes(value.toLowerCase()) ||
    //       user.phone.includes(value)
    //     );
    //     setFilteredUsers(filtered);
    //   }
    //   setLoading(false);
    // };

    return (
        <>
            <section className="main_content dashboard_part">
                <div className="main_content_iner">
                    <div className="container-fluid plr_30 body_white_bg pt_30">
                        <div className="row justify-content-center" style={{ padding: "40px 0px 0px 350px" }}>
                            <div className="col-12">
                                <div className="breadcrumb-area mb-4">
                                    <Link to="/manager">Trang chủ {'  /  '} </Link>
                                    <Link to="/manager/giao-dich/nguoi-mua"> Quá hạn thanh toán</Link>
                                </div>
                                <div className="QA_section">
                                    <div className="white_box_tittle list_header">
                                        <h4>Hóa đơn quá hạn thanh toán</h4>
                                        <div className="box_right d-flex lms_block">
                                            <div className="serach_field_2">
                                                <div className="search_inner">
                                                    <form >
                                                        <div className="search_field">
                                                            <input
                                                                type="text"
                                                                placeholder="Tên tài khoản..."
                                                            // value={txtSearch}
                                                            // onChange={handleTxtSearch}
                                                            />
                                                        </div>
                                                        <button type="submit">
                                                            <i className="ti-search"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Tên tài khoản</th>
                                                    <th scope="col" style={{ width: '15%' }}>Ngày tạo hóa đơn</th>
                                                    <th scope="col">Số tiền (VNĐ)</th>
                                                    <th scope="col">Loại giao dịch</th>
                                                    <th scope="col">Trạng thái</th>
                                                    <th scope="col">Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {loading ? (
                                                    <tr>
                                                        <td colSpan={7} className="text-center">
                                                            <Spinner animation="border" />
                                                        </td>
                                                    </tr>
                                                ) : (listTransactions.length > 0 ? (listTransactions.map((transaction) => (
                                                    <tr key={transaction.id}>
                                                        <td>{transaction.id}</td>
                                                        <td>{transaction.user?.username}
                                                            <Link target="_blank" to={`/manager/chi-tiet-nguoi-dung/${transaction.user?.id}`}>
                                                                <i className="ms-2 fa-solid fa-eye text-dark"></i>
                                                            </Link>
                                                        </td>
                                                        <td>{formatDateString(transaction.createDate)}</td>
                                                        <td>{formatNumber(transaction.totalPrice)}</td>
                                                        <td><TypeTransaction type={transaction.type}/></td>
                                                        <td>
                                                            <a className="fw-bold text-danger" >Chưa thanh toán</a>
                                                        </td>
                                                        <td>
                                                            <ViewTransactionModal transaction={transaction} />
                                                            <DeleteTransactionModal transaction={transaction} />
                                                        </td>
                                                    </tr>
                                                ))
                                                ) : (
                                                    <tr className="text-center">
                                                        <td colSpan={7}>
                                                            <h5 className='fw-semibold lh-base mt-2'>Không có giao dịch quá hạn nào </h5>
                                                        </td>
                                                    </tr>
                                                )
                                                )
                                                }
                                            </tbody>
                                        </Table>
                                        <PaginationControl
                                            page={page}
                                            between={5}
                                            total={totalElements}
                                            limit={5}
                                            changePage={(page) => {
                                                setPage(page);
                                            }}
                                            ellipsis={1}
                                        />
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

export default TransactionsOverdue;
