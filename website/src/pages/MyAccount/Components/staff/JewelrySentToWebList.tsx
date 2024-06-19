import React, { useCallback, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { Jewelry } from '../../../../models/Jewelry';
import { getJewelriesByStateAndHolding } from '../../../../api/JewelryAPI';
import { ConfirmHoldingModal } from '../../Modal/ModalStaff';
interface JewelrySentToWebProps {
  userId: number | undefined;
  listNumber: number
}
const JewelrySentToWebList: React.FC<JewelrySentToWebProps> = ({ userId, listNumber }) => {
  const jewelryState = 'ACTIVE'
  const [jewelryRequestList, setJewelryList] = useState<Jewelry[]>([]);
  const [totalElements, setTotalElements] = useState(0)
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);


  const handleChangeList = useCallback(async () => {
    setLoading(true);
    try {
      if (userId) {
        const response = await getJewelriesByStateAndHolding(jewelryState, false, page);
        setJewelryList(response.jeweriesData);
        setTotalElements(response.totalElements);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [userId, page]);

  useEffect(() => {
    handleChangeList();
  }, [userId, page, handleChangeList]);
  return (<div
    className="tab-pane fade"
    id="jewelry-sent"
    role="tabpanel"
    aria-labelledby="account-address-tab"
  >
    <div className="myaccount-orders">
      <h4 className="small-title">
        Danh sách tài sản gửi đến
      </h4>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <tbody>
            <tr>
              <th>Mã tài sản</th>
              <th style={{ width: '25%' }}>Tên tài sản</th>
              <th>Phân loại</th>
              <th>Chủ tài sản</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>{loading ? (
              <tr>
                <td colSpan={6} className="text-center">
                  <Spinner animation="border" />
                </td>
              </tr>

            ) : (jewelryRequestList.length > 0 ? (React.Children.toArray(jewelryRequestList.map(
              (jewelry) =>
                <tr>
                  <td>
                    {jewelry.id}
                  </td>
                  <td className='text-start'>
                    {jewelry.name}
                  </td>
                  <td>
                    {jewelry.category?.name}
                  </td>
                  <td>
                    {jewelry.user?.fullName}
                  </td>

                  {jewelry.isHolding === false ? (
                    <td className="fw-semibold text-danger">
                      Chưa nhận
                    </td>
                  ) : (
                    <td className="fw-semibold text-success">
                      Đã nhận
                    </td>
                  )}
                  <td>
                    <ConfirmHoldingModal jewelry={jewelry} handleChangeList={handleChangeList} />
                  </td>
                </tr>
            ))) : (<td colSpan={6} className="text-center">
              <h5 className='fw-semibold lh-base mt-2'>Không có tài sản nào</h5>
            </td>))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="mt-4">
      <PaginationControl
        page={page}
        between={3}
        total={totalElements}
        limit={5}
        changePage={(page) => {
          setPage(page)
        }}
        ellipsis={1}
      />
    </div>
  </div>
  )
}

export default JewelrySentToWebList
