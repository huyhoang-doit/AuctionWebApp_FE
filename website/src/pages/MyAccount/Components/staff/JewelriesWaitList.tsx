import React, { useEffect, useState } from 'react'
import { Jewelry } from '../../../../models/Jewelry'
import { getJewelriesWaitList } from '../../../../api/JewelryAPI'
import { JewelryWaitSingle } from './JewelryWaitSingle'
import { User } from '../../../../models/User'
import { PaginationControl } from 'react-bootstrap-pagination-control'

interface JewelriesWaitListProps {
  user: User | null;
  setUser: (user: User) => void;
}

const JewelriesWaitList: React.FC<JewelriesWaitListProps> = (props) => {
  const [listJewelries, setListJewelries] = useState<Jewelry[]>([])
  const [user, setUser] = useState<User | null>(props.user);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);
  useEffect(() => {
    getJewelriesWaitList(page)
      .then((response) => {
        setListJewelries(response.jeweriesData);
        setTotalElements(response.totalElements);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [props.user, page])
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
                {listJewelries.map((jewelry) => (
                  <JewelryWaitSingle key={jewelry.id} jewelry={jewelry} user={props.user} />
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
