import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react"; // Thêm useState để quản lý trang hiện tại
import { Breadcrumb, Dropdown, Spinner } from 'react-bootstrap';
import { Auction } from "../../../models/Auction";
import { User } from "../../../models/User";
import { getAllAuctions } from "../../../api/AuctionAPI";
import { PaginationControl } from "react-bootstrap-pagination-control";
import useAccount from "../../../hooks/useAccount";
import AuctionSingle from "./AuctionSingle";

const AuctionsList = () => {
  //
  const token = localStorage.getItem("access_token");
  const user = useAccount(token);
  const states = ['WAITING', 'ONGOING', 'FINISHED']

  const [listAuctions, setListAuctions] = useState<Auction[]>([]);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [auctionState, setAuctionState] = useState('WAITING');
  const [userState, setUserState] = useState<User | null>(user);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setUserState(user);
  }, [user]);

  const handleChangeList = useCallback(async () => {
    setLoading(true); // Bắt đầu tải
    try {
      const response = await getAllAuctions(auctionState, page);
      if (!response) {
        setLoading(false);
        return;
      }
      setListAuctions(response.auctionsData);
      setTotalElements(response.totalAuctions);
    } catch (error) {
      console.error(error);
    }
    setLoading(false); // Kết thúc tải
  }, [page, auctionState]);

  useEffect(() => {
    handleChangeList();
  }, [user, page, auctionState, handleChangeList]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAuctionState(e.target.value);
    setPage(1);
  };

  return (
    <>
      <section className="main_content dashboard_part">
        <div className="main_content_iner ">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center" style={{ padding: "50px 0px 0px 100px" }}>
              <div className="col-12">
                <div className="breadcrumb-area">
                  <Breadcrumb>
                    <Breadcrumb.Item href="/admin">Trang chủ</Breadcrumb.Item>
                    <Breadcrumb.Item >Danh sách các phiên đấu giá</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Các phiên đấu giá</h4>
                    <div className="box_right d-flex lms_block">
                      <div className="serach_field_2">
                        <div className="search_inner">

                        </div>
                      </div>
                      <div className="add_button ms-2">
                        <label>Trạng thái</label>
                        <select
                          value={auctionState}
                          onChange={handleCategoryChange}
                          style={{ width: '100%', height: '40px', padding: '0 0 0 10px' }}
                          required
                        >
                          {states.map((state, index) => (
                            <option style={{ padding: '5px' }} key={index} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <table className="table text-center">
                      <thead>
                        <tr>
                          <th scope="col">Mã phiên</th>
                          <th scope="col">Tên phiên</th>
                          <th scope="col">Thời gian bắt đầu</th>
                          <th scope="col">Thời gian kết thúc</th>
                          <th scope="col">Nhân viên quản lý</th>
                          <th scope="col">Trạng thái</th>
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

                        ) : (listAuctions.length > 0 ?
                          (listAuctions.map((auction) => (
                            <AuctionSingle key={auction.id} auction={auction} />
                          ))) : (<td colSpan={7} className="text-center">
                            <h5 className='fw-semibold lh-base mt-2'>Không có phiên đấu giá nào </h5>
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
};

export default AuctionsList;

