import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SettingWebsite = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDeleteManager = () => {
        console.log('Xóa quản lý');
        handleCloseModal();
    };

    return (
        <>
            <section className="main_content dashboard_part">
                <div className="main_content_iner">
                    <div className="container-fluid plr_30 body_white_bg pt_30">
                        <div className="row justify-content-center" style={{ padding: "40px 0px 0px 350px" }}>
                            <div className="col-12">
                                <div className="breadcrumb-area mb-4">
                                    <Link to="/admin">Trang chủ {'  /  '} </Link>
                                    <Link to="/admin/danh-sach-quan-ly"> Thay đổi thông tin trang chủ  </Link>
                                </div>
                                <div className="QA_section">
                                    <div className="white_box_tittle list_header">
                                        <h4>Danh sách thông tin</h4>
                                    </div>
                                    <div>
                                    </div>
                                    <Modal show={showModal} onHide={handleCloseModal}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Xác nhận xóa</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Bạn có chắc chắn muốn xóa quản lý này?</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseModal}>
                                                Hủy
                                            </Button>
                                            <Button variant="danger" onClick={handleDeleteManager}>
                                                Xóa
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default SettingWebsite;
