import { useCallback, useEffect, useState } from "react"; // Thêm useState để quản lý trang hiện tại
import { Spinner, Table } from 'react-bootstrap';
import { getAllAuctionsAndNumberRegister } from "../../../api/AuctionAPI";
import { PaginationControl } from "react-bootstrap-pagination-control";
import useAccount from "../../../hooks/useAccount";
import { Link } from "react-router-dom";
import { StateAuction } from "../Auctions/StateAuction";
import { getAuctionStatusStyle } from "../../../utils/cssStyle";
import { formatDateString } from "../../../utils/formatDateString";
import { ViewAuctionRegistrationModal } from "../Modal/Modal";

interface AuctionAndNumberRegisterResponse {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    state: string;
    numberOfParticipants: number;
}

const AuctionRegistrationList = () => {
    //
    const token = localStorage.getItem("access_token");
    const user = useAccount(token);
    const states = ['WAITING', 'ONGOING', 'FINISHED', 'PAUSED']

    const [listAuctions, setListAuctions] = useState<AuctionAndNumberRegisterResponse[]>([]);
    const [page, setPage] = useState(1);
    const [totalElements, setTotalElements] = useState(0);
    const [auctionState, setAuctionState] = useState('WAITING');
    const [loading, setLoading] = useState(true);

    const handleChangeList = useCallback(async () => {
        setLoading(true); // Bắt đầu tải
        try {
            const response = await getAllAuctionsAndNumberRegister(auctionState, page);
            if (!response) {
                setLoading(false);
                return;
            }
            const sortedAuctions = response.auctionsData.sort((a, b) => b.numberOfParticipants - a.numberOfParticipants);
            setListAuctions(sortedAuctions);
            setTotalElements(response.totalAuctions);
        } catch (error) {
            console.error(error);
            setListAuctions([])
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
                        <div className="row justify-content-center" style={{ padding: "40px 0px 0px 350px" }}>
                            <div className="col-12">
                                <div className="breadcrumb-area">
                                    <Link to="/manager">Trang chủ  / </Link>
                                    <Link to="/manager/cac-phien-dau-gia">Danh sách các phiên đấu giá</Link>
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
                                                            {<StateAuction state={state} />}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Mã phiên</th>
                                                    <th scope="col" style={{ width: '20%' }}>Tên phiên</th>
                                                    <th scope="col">Thời gian bắt đầu</th>
                                                    <th scope="col">Thời gian kết thúc</th>
                                                    <th scope="col">Trạng thái</th>
                                                    <th scope="col">Số người đã đăng ký</th>
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
                                                        <tr key={auction.id}>
                                                            <td>{auction.id}</td>
                                                            <td>{auction.name}</td>
                                                            <td>{formatDateString(auction.startDate)}</td>
                                                            <td>{formatDateString(auction.endDate)}</td>
                                                            <td style={getAuctionStatusStyle(auction.state)}>
                                                                <StateAuction state={auction.state} />
                                                            </td>
                                                            <td>{auction.numberOfParticipants}</td>
                                                            <td>
                                                                <ViewAuctionRegistrationModal name={auction.name} auctionId={auction.id} />
                                                            </td>
                                                        </tr>
                                                    )))
                                                    : (
                                                        <td colSpan={7} className="text-center">
                                                            <h5 className='fw-semibold lh-base mt-2'>Không có phiên đấu giá nào </h5>
                                                        </td>))
                                                }
                                            </tbody>
                                        </Table>
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

export default AuctionRegistrationList;

