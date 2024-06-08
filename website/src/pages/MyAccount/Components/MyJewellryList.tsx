import React, { useCallback, useEffect, useState } from 'react'
import { User } from '../../../models/User';
import { getRequestByRoleOfSender } from '../../../api/RequestApprovalAPI';
import { RequestApproval } from '../../../models/RequestApproval';
import MyJewelrySingle from './MyJewelrySingle';
import { PaginationControl } from 'react-bootstrap-pagination-control';

interface MyJewelriesProps {
  user: User | null;
  setUser: (user: User) => void;
}
const MyJewellryList: React.FC<MyJewelriesProps> = (props) => {
  const [listRequests, setListRequests] = useState<RequestApproval[]>([]);
  const [user, setUser] = useState<User | null>(props.user);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  const handleChangeList = useCallback(async () => {
    try {
      const response = await getRequestByRoleOfSender('MANAGER', page);
      console.log(response);

      setListRequests(response.requestsData);
      setTotalElements(response.totalElements);
    } catch (error) {
      console.error(error);
    }
  }, [page]);

  useEffect(() => {
    handleChangeList();
  }, [user, page, handleChangeList]);
  return (
    <>
      <div
        className="tab-pane fade"
        id="my-jewelry"
        role="tabpanel"
        aria-labelledby="account-orders-tab"
      >
        <div className="myaccount-orders">
          <h4 className="small-title">
            Danh sách sản phẩm của tôi
          </h4>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <tbody>
                <tr>
                  <th>Mã trang sức</th>
                  <th>Tên trang sức</th>
                  <th>Ảnh</th>
                  <th>Giá mong muốn</th>
                  <th>Định giá</th>
                  <th>Thao tác</th>
                </tr>
                {listRequests.map((request) => (
                  <MyJewelrySingle key={request.id} request={request} jewelry={request.jewelry} user={props.user} handleChangeList={handleChangeList} />
                ))}
              </tbody>
            </table>
            <div className="mt-4">
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
      </div >

    </>
  )
}

export default MyJewellryList
