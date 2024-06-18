import React, { useCallback, useEffect, useState } from 'react'
import useAccount from '../../../hooks/useAccount';
import { RequestApproval } from '../../../models/RequestApproval';
import { User } from '../../../models/User';
import { getRequestPassed } from '../../../api/RequestApprovalAPI';
import { Breadcrumb, Spinner } from 'react-bootstrap';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import PassedJewelrySingle from './PassedJewelrySingle';

const PassedJewelriesList = () => {
  const token = localStorage.getItem("access_token");
  const user = useAccount(token);

  const [listRequests, setListRequests] = useState<RequestApproval[]>([]);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [userState, setUserState] = useState<User | null>(user);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setUserState(user);
  }, [user]);

  const handleChangeList = useCallback(async () => {
    setLoading(true)
    try {
      //
      const response = await getRequestPassed(page);
      setListRequests(response.requestsData);
      setTotalElements(response.totalElements);
    } catch (error) {
      console.error(error);
    }
    setLoading(false)
  }, [page]);

  useEffect(() => {
    handleChangeList();
  }, [user, page, handleChangeList]);


  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner ">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center" style={{ padding: "50px 0px 0px 90px" }}>
              <div className="col-12">
                <div className="breadcrumb-area">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/admin">Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item >Các tài sản đủ điều kiện</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Danh sách tài sản đủ điều kiện đấu giá</h4>
                    <div className="box_right d-flex lms_block">
                      <div className="serach_field_2">
                      </div>
                    </div>
                  </div>
                  <div className=" ">
                    <table className="table text-center">
                      <thead>
                        <tr className=''>
                          <th scope="col">Mã yêu cầu</th>
                          <th scope="col">Mã sản phẩm</th>
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
                        ))) : (<td colSpan={7} className="text-center">
                          <h5 className='fw-semibold lh-base mt-2'>Không có tài sản nào </h5>
                        </td>))
                        }
                      </tbody>
                    </table>
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
