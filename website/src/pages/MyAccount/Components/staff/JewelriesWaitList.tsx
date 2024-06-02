import React, { useCallback, useEffect, useState } from 'react'
import { JewelryWaitSingle } from './JewelryWaitSingle'
import { User } from '../../../../models/User'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import { getRequestByRoleOfSender } from '../../../../api/RequestApprovalAPI'
import { RequestApproval } from '../../../../models/RequestApproval'

interface JewelriesWaitListProps {
  user: User | null;
  setUser: (user: User) => void;
}

const JewelriesWaitList: React.FC<JewelriesWaitListProps> = (props) => {
  const [listRequests, setListRequests] = useState<RequestApproval[]>([]);
  const [user, setUser] = useState<User | null>(props.user);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [notification, setNotification] = useState<string>('');

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  const handleChangeList = useCallback(async () => {
    try {
      const response = await getRequestByRoleOfSender('MEMBER', page);
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
        id="account-orders"
        role="tabpanel"
        aria-labelledby="account-orders-tab"
      >
        <div className="myaccount-orders">
          <h4 className="small-title">
            Danh sách sản phẩm gửi đến
          </h4>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <tbody>
                <tr>
                  <th>Mã trang sức</th>
                  <th>Tên trang sức</th>
                  <th>Người gửi</th>
                  <th>Giá</th>
                  <th>Ảnh</th>
                  <th>Xem chi tiết</th>
                </tr>
                {listRequests.map((request) => (
                  <JewelryWaitSingle key={request.id} request={request} jewelry={request.jewelry} user={props.user} setNotification={setNotification} handleChangeList={handleChangeList} />
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

export default JewelriesWaitList
