import React, { useEffect, useState } from 'react'
import { Jewelry } from '../../../../models/Jewelry';
import { getJewelriesHandOverList } from '../../../../api/JewelryAPI';
import { User } from '../../../../models/User';
import JewelryHandOverSingle from './JewelryHandOverSingle';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { Spinner } from 'react-bootstrap';

interface JewelriesHandOverListProps {
  user: User | null;
  setUser: (user: User) => void;
}
const JewelriesHandOverList: React.FC<JewelriesHandOverListProps> = (props) => {
  const [listJewelries, setListJewelries] = useState<Jewelry[]>([])
  const [user, setUser] = useState<User | null>(props.user);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  useEffect(() => {
    setLoading(true)
    getJewelriesHandOverList(page)
      .then((response) => {
        setListJewelries(response.jeweriesData);
        setTotalElements(response.totalElements);

      })
      .catch((error) => {
        console.error(error.message);
      });
    setLoading(false)
  }, [props.user, page])
  return (
    <>
      <div
        className="tab-pane fade"
        id="account-address"
        role="tabpanel"
        aria-labelledby="account-address-tab"
      >
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
                </tr>{loading ? (
                  <tr>
                    <td colSpan={6} className="text-center">
                      <Spinner animation="border" />
                    </td>
                  </tr>

                ) : (listJewelries.length > 0 ? (listJewelries.map((jewelry) => (
                  <JewelryHandOverSingle key={jewelry.id} jewelry={jewelry} user={props.user} />
                ))) : (<td colSpan={6} className="text-center">
                  <h5 className='fw-semibold lh-base mt-2'>Chưa có yêu cầu nào cần bàn giao</h5>
                </td>))}
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
      </div>
    </>
  )
}

export default JewelriesHandOverList
