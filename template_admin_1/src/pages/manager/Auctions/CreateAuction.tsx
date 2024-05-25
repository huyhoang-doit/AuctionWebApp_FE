

const CreateAuction = () => {
  return (
    <>
      <section className="main_content dashboard_part">

       

        <div className="main_content_iner ">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="white_box mb_30">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">

                      <div className="modal-content cs_modal">
                        <div className="modal-header">
                          <h5 className="modal-title">Tạo phiên đấu giá</h5>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="row">
                              <div className="row col-md-12">
                                <div className="form-group col-md-6">
                                  <label>Mã phiên đấu giá</label>
                                  <input type="text" className="form-control" id="auction-id" placeholder="Mã phiên đấu giá"
                                    required />
                                </div>
                                <div className="form-group col-md-6">
                                  <label >Mã sản phẩm đấu giá</label>
                                  <input type="text" className="form-control" id="product-id" placeholder="Mã sản phẩm đấu giá"
                                    required />
                                </div>
                              </div>
                              <div className="row col-md-12">
                                <div className="form-group col-md-6">
                                  <label >Tên phiên đấu</label>
                                  <input type="text" className="form-control" id="auction-id" placeholder="Tên phiên đấu giá"
                                    required />
                                </div>
                                <div className="form-group col-md-6 ">
                                  <div className="py-auto">
                                    <h5>Trạng thái:</h5><b> WAITING</b>
                                  </div>
                                </div>
                              </div>
                              <div className="row col-md-12">
                                <div className="form-group col-md-6">
                                  <label >Giá khởi điểm</label>
                                  <input type="number" className="form-control" id="starting-price" placeholder="Giá khởi điểm"
                                    required />
                                </div>
                                <div className="form-group col-md-6">
                                  <label >Tiền đặt trước</label>
                                  <input type="number" className="form-control" id="deposit" placeholder="Tiền đặt trước"
                                    required />
                                </div>
                              </div>
                              <div className="row col-md-12">
                                <div className="form-group col-md-6">
                                  <label>Bước giá</label>
                                  <input type="number" className="form-control" id="starting-price"
                                    placeholder="Mức tăng tối thiểu" required />
                                </div>
                                <div className="form-group col-md-6">
                                  <label >Thời gian đếm ngược </label>
                                  <input type="number" className="form-control" id="deposit" placeholder="" required />
                                </div>
                              </div>
                              <div className="form-group col-md-12">
                                <div className="container-fluid plr_30 pt_30">
                                  <div className="row justify-content-center">
                                    <div className="col-lg-6">
                                      <div className="white_box mb_30">
                                        <div className="input_wrap common_date_picker mb_20">
                                          <label className="form-label" >Ngày bắt đầu</label>
                                          <input className="input_form" id="start_datepicker" placeholder="Pick a start date" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="white_box mb_30">
                                        <div className="input_wrap common_date_picker mb_20">
                                          <label className="form-label" >Start date</label>
                                          <input className="input_form" id="start_datepicker" placeholder="Pick a start date" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group col-md-12 text-center">
                                <button type="submit" className="btn_1 full_width">Submit</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default CreateAuction
