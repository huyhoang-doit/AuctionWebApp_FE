interface ErrorProps {
    error: string;
}

export const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-12">
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                </div>
            </div>
        </div>
    );
}