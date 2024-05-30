import React, { useEffect, useState } from 'react'
import { Jewelry } from '../../../../models/Jewelry'
import { getJewelriesWaitList } from '../../../../api/JewelryAPI'
import { JewelryWaitSingle } from './JewelryWaitSingle'
import { User } from '../../../../models/User'

interface JewelriesWaitListProps {
  user: User | null;
  setUser: (user: User) => void;
}

const JewelriesWaitList: React.FC<JewelriesWaitListProps> = (props) => {
  const [listJewelries, setListJewelries] = useState<Jewelry[]>([])
  useEffect(() => {
    getJewelriesWaitList()
      .then((response) => {
        setListJewelries(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [])
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
          </div>
        </div>
      </div >
    </>
  )
}

export default JewelriesWaitList
