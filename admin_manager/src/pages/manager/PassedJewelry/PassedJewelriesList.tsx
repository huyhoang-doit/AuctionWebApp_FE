import { useCallback, useEffect, useState } from 'react'
import useAccount from '../../../hooks/useAccount';
import { RequestApproval } from '../../../models/RequestApproval';
import { User } from '../../../models/User';
import { getRequestPassed } from '../../../api/RequestApprovalAPI';
import { Spinner, Table } from 'react-bootstrap';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import PassedJewelrySingle from './PassedJewelrySingle';
import { Link } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import { useCategories } from '../../../hooks/useCategories';

const PassedJewelriesList = () => {
  const token = localStorage.getItem("access_token");
  const user = useAccount(token);

  const [listRequests, setListRequests] = useState<RequestApproval[]>([]);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [userState, setUserState] = useState<User | null>(user);
  const [loading, setLoading] = useState(true);
  const [debouncedTxtSearch, setDebouncedTxtSearch] = useState('');
  const [txtSearch, setTxtSearch] = useState('');
  const [category, setCategory] = useState('Tất cả');
  const categories = useCategories();
  const categoryNames: (string | undefined)[] = categories.map(category => category.name);
  categoryNames.unshift('Tất cả')


  const debouncedTxtSearchChange = useDebouncedCallback(
    (txtSearch: string) => {
      setDebouncedTxtSearch(txtSearch);
    },
    1000
  );

  const handleTxtSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTxtSearch(value);
    debouncedTxtSearchChange(value);
  };


  useEffect(() => {
    setUserState(user);
  }, [user]);

  const handleChangeList = useCallback(async () => {
    setLoading(true)
    try {
      //
      const response = await getRequestPassed(debouncedTxtSearch, category, page);
      setListRequests(response.requestsData);
      setTotalElements(response.totalElements);
    } catch (error) {
      console.error(error);
    }
    setLoading(false)
  }, [page, debouncedTxtSearch, category]);

  useEffect(() => {
    handleChangeList();
  }, [user, page, debouncedTxtSearch, category]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setPage(1);
    setTxtSearch('');
    debouncedTxtSearchChange('')
  };

  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner ">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center" style={{ padding: "40px 0px 0px 350px" }}>
              <div className="col-12">
                <div className="breadcrumb-area">
                  <Link to="/manager">Trang chủ  / </Link>
                  <Link to="/manager/tai-san-dang-cho">Danh sách tài sản đủ yêu cầu đấu giá</Link>
                </div>
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Danh sách tài sản đủ điều kiện đấu giá</h4>
                    <div className="box_right d-flex lms_block">
                      <div className="serach_field_2">
                        <div className="search_inner">
                          <form >
                            <div className="search_field">
                              <input
                                type="text"
                                placeholder="Tên sản phẩm..."
                                value={txtSearch}
                                onChange={handleTxtSearch}
                              />
                            </div>
                            <button type="submit">
                              <i className="ti-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className="add_button ms-2">
                        <select className='rounded'
                          value={category}
                          onChange={handleCategoryChange}
                          style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }}
                          required
                        >
                          {categoryNames.map((category, index) => (
                            <option style={{ padding: '5px' }} key={index} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className=" ">
                    <Table striped bordered hover>
                      <thead>
                        <tr className=''>
                          <th scope="col">Mã tài sản</th>
                          <th scope="col">Tên tài sản</th>
                          <th scope="col">Phân loại</th>
                          <th scope="col">Chủ tài sản</th>
                          <th scope="col">Định giá (VND)</th>
                          <th scope="col">Nhân viên định giá</th>
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

                        ) : (listRequests.length > 0 ? (listRequests.map((request) => (
                          <PassedJewelrySingle key={request.id} request={request} user={userState} handleChangeList={handleChangeList} />
                        ))) : (<tr className="text-center">
                          <td colSpan={7}>
                            <h5 className='fw-semibold lh-base mt-2'>Không có tài sản nào </h5>
                          </td>
                        </tr>))
                        }
                      </tbody>
                    </Table>
                  </div>
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
      </section>
    </>
  );
}

export default PassedJewelriesList
