interface StateTransactionViewProps {
    state: string;
}

export const StateTransaction: React.FC<StateTransactionViewProps> = (props) => {
    const currentView = {
        SUCCEED: <span className="text-success fw-bold" >
            Thành công
        </span>,
        FAILED: <span className="text-danger fw-bold" >
            Không thành công
        </span>,
    }[props.state]
    return currentView;
}