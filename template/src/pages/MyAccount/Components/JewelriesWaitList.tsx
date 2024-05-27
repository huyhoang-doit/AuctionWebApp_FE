import React, { useEffect, useState } from 'react'
import { Jewelry } from '../../../models/Jewelry'
import { getJewelriesWaitList } from '../../../api/JewelryAPI'
import { JewelryWaitSingle } from './JewelryWaitSingle'

const JewelriesWaitList = () => {
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
                <JewelryWaitSingle key={jewelry.id} jewelry={jewelry} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default JewelriesWaitList
