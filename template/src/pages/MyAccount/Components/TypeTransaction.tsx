interface StateTransactionProps {
    type: string;
}

export const TypeTransaction: React.FC<StateTransactionProps> = (props) => {
    const currentView = {
        REGISTRATION: <span className="fw-bold" >
            Đăng kí tham gia phiên
        </span>,
        REFUND: <span className="fw-bold" >
            Hoàn tiền đăng kí tham gia phiên
        </span>,
        PAYMENT_TO_SELLER: <span className="fw-bold" >
            Thanh toán cho người gửi sản phẩm đấu giá
        </span>,
        PAYMENT_TO_BUYER: <span className="fw-bold" >
            Thanh toán cho người mua
        </span>,
    }[props.type]
    return currentView;
}