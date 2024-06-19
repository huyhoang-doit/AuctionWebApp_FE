import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Transaction } from '../../../models/Transaction';
import { getTransactionsByTypeAndState } from '../../../api/TransactionAPI';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import checkTransactionLocation from '../../../utils/checkLocation';
import TransactionSingle from './TransactionSingle';
import { StateTransaction } from './StateTransaction';

interface TransactionTypeProps {
  type: string;
  breadcumb: string;
}

const TransactionList = () => {
  //
  const location = useLocation();
  const locationPathName = location.pathname
  const typeObject: TransactionTypeProps = checkTransactionLocation(locationPathName)

  // const [searchInput, setSearchInput] = useState('');
  // const [filteredUsers, setFilteredUsers] = useState(users);
  const states = ['SUCCEED', 'PENDING', 'FAILED']
  //
  const [listTransactions, setListTransactions] = useState<Transaction[]>([])
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(true);
  const [transactionState, setTransactionState] = useState('SUCCEED');

  useEffect(() => {
    setLoading(true)
    try {
      getTransactionsByTypeAndState(typeObject.type, transactionState, page)
        .then((response) => {
          setListTransactions(response.transactions);
          setTotalElements(response.totalElements);

        })
        .catch((error) => {
          setListTransactions([])
        });
    } catch (error) {
      // console.error(error);
    }
    setLoading(false)
  }, [page, transactionState, typeObject.type])

  const handleTransactionStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTransactionState(e.target.value);
    setPage(1);
  };


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
                  <Link to="/manager/giao-dich/nguoi-mua"> Lịch sử giao dịch {'  /  '} </Link>
                  <Link to={locationPathName}> {typeObject.breadcumb} </Link>
                </div>
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>{typeObject.breadcumb}</h4>
                    <div className="box_right d-flex lms_block">
                      <div className="serach_field_2">
                        {/* <div className="search_inner">
                          <form>
                            <div className="">
                              <input
                                type="text"
                                placeholder="Tìm kiếm..."
                                value={searchInput}
                              // onChange={handleSearchInput}
                              />
                            </div>
                          </form>
                        </div> */}
                      </div>
                      <div className="add_button ms-2 ">

                        <select className='rounded'
                          value={transactionState}
                          onChange={handleTransactionStateChange}
                          style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }}
                          required
                        >
                          {states.map((state, index) => (
                            <option style={{ padding: '5px' }} key={index} value={state}>
                              {<StateTransaction state={state} />}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Tên tài khoản</th>
                          <th scope="col" style={{ width: '15%' }}>Email</th>
                          <th scope="col">Số điện thoại</th>
                          <th scope="col">Số tiền</th>
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
                          <TransactionSingle key={transaction.id} transaction={transaction} />
                        ))
                        ) : (<td colSpan={7} className="text-center">
                          <h5 className='fw-semibold lh-base mt-2'>Chưa có giao dịch nào</h5>
                        </td>)
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

export default TransactionList;
