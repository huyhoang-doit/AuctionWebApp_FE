import React, { useEffect, useState } from 'react'
import { Jewelry } from '../../../../models/Jewelry';
import { getJewelriesHandOverList } from '../../../../api/JewelryAPI';
import { User } from '../../../../models/User';
import JewelryHandOverSingle from './JewelryHandOverSingle';

interface JewelriesHandOverListProps {
  user: User | null;
  setUser: (user: User) => void;
}
const JewelriesHandOverList: React.FC<JewelriesHandOverListProps> = (props) => {
  const [listJewelries, setListJewelries] = useState<Jewelry[]>([])
  useEffect(() => {
    getJewelriesHandOverList()
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
          Danh sách trang sức bàn giao
        </h4>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th>Mã trang sức</th>
                <th>Tên trang sức</th>
                <th>Phiên đấu</th>
                <th>Giá cuối</th>
                <th>Người thắng</th>
                <th>Xem chi tiết</th>
              </tr>
              {listJewelries.map((jewelry) => (
                <JewelryHandOverSingle key={jewelry.id} jewelry={jewelry} user={props.user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default JewelriesHandOverList
