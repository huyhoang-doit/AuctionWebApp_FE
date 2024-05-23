import React, { useState } from 'react'
import { AuctionItem } from './AuctionItem'
import { useParams } from 'react-router-dom';
import useAuctions from '../../../hooks/useAuctions';
import { parseId } from '../../../utils/parseNumber';
import { Pagination } from './Pagination';

interface ContainerListAuctionsProps {
  selectedStates: string[];
}

const ContainerListAuctions: React.FC<ContainerListAuctionsProps> = (props) => {
  const { state, cateId, fromDateFilter, toDateFilter } = useParams();
  const categoryId = parseId(cateId);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageable, setPageable] = useState({ page: 1, size: 5 });
  const { auctions, totalPages, totalAuctions } = useAuctions(
    state, categoryId, fromDateFilter, toDateFilter, props.selectedStates,
    pageable
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setPageable({ ...pageable, page: page });
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  return (
    <>
      <div className="shop-toolbar">
        <div className="product-view-mode">
          <a
            className="active list"
            data-target="listview"
            data-toggle="tooltip"
            data-placement="top"
            title="List View"
          >
            <i className="fa fa-th-list"></i>
          </a>
        </div>
        <div className="product-page_count">
          <p>Showing {currentPage} – {totalPages} of {totalAuctions} results</p>
        </div>
        <div className="product-item-selection_area">
          <div className="product-short">
            <label className="select-label">
              Short By:
            </label>
            <select className="nice-select">
              <option value="1">
                Default sorting
              </option>
              <option value="2">
                Name, A to Z
              </option>
              <option value="3">
                Name, Z to A
              </option>
              <option value="4">
                Price, low to high
              </option>
              <option value="5">
                Price, high to low
              </option>
              <option value="5">
                Rating (Highest)
              </option>
              <option value="5">
                Rating (Lowest)
              </option>
              <option value="5">
                Model (A - Z)
              </option>
              <option value="5">
                Model (Z - A)
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="shop-product-wrap row listview">
        {React.Children.toArray(auctions.map(
          (auction) => <AuctionItem auction={auction} />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange} />
    </>
  )
}

export default ContainerListAuctions
