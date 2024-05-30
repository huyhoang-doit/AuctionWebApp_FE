interface StateAuctionViewProps {
    state: string;
}

export const StateAuctionView: React.FC<StateAuctionViewProps> = (props) => {
    const currentView = {
        ONGOING: <span className="text-warning fw-bold" >
            Đang diễn ra
        </span>,
        WAITING: <span className="text-warning fw-bold" >
            Đang chờ
        </span>,
        FINISHED: <span className="text-warning fw-bold" >
            Đã kết thúc
        </span>,
        PAUSED: <span className="text-warning fw-bold" >
            Tạm dừng
        </span>,
        DELETED: <span className="text-warning fw-bold" >
            Đã xóa
        </span>,
    }[props.state]
    return currentView;
}