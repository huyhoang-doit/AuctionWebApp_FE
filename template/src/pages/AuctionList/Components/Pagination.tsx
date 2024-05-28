import { Link } from "react-router-dom";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
    const listPage: number[] = [];

    if (props.currentPage === 1) {
        listPage.push(props.currentPage);
        if (props.totalPages >= 2) {
            listPage.push(props.currentPage + 1);
        }
        if (props.totalPages >= 3) {
            listPage.push(props.currentPage + 2);
        }
    } else if (props.currentPage > 1) {
        // page -2
        if (props.currentPage > 2) {
            listPage.push(props.currentPage - 2);
        }
        // page -1
        if (props.currentPage > 1) {
            listPage.push(props.currentPage - 1);
        }
        // page currently selected
        listPage.push(props.currentPage);
        // page + 1
        if (props.totalPages > props.currentPage) {
            listPage.push(props.currentPage + 1);
        }
        // page + 2
        if (props.totalPages > props.currentPage + 1) {
            listPage.push(props.currentPage + 2);
        }
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="umino-paginatoin-area">
                    <ul className="umino-pagination-box">
                        {/* Previous Page Button */}
                        <li>
                            <Link to="" onClick={() => props.handlePageChange(1)}>First</Link>
                        </li>
                        {/* Page Buttons */}
                        {listPage.map((page, index) => (
                            <li key={index} className={props.currentPage === page ? 'active' : ''}>
                                <Link to="" onClick={() => props.handlePageChange(page)}>{page}</Link>
                            </li>
                        ))}
                        {/* Next Page Button */}
                        <li>
                            <Link to="" onClick={() => props.handlePageChange(props.totalPages)}>Last</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>)
}