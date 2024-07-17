import React, { useEffect, useState } from "react";
import { AuctionItem } from "./AuctionItem";
import useAuctions from "../../../hooks/useAuctions";
import { parseId } from "../../../utils/parseNumber";
import { Pagination } from "./Pagination";
import { useTranslation } from "react-i18next";

interface ContainerListAuctionsProps {
  selectedStates: string[];
  setSelectedStates: (checkboxValues: string[]) => void;
  state: string | undefined;
  cateId: string | undefined;
  fromDateFilter: string | undefined;
  toDateFilter: string | undefined;
  txtSearch: string | undefined;
}

const ContainerListAuctions: React.FC<ContainerListAuctionsProps> = (props) => {
  const {
    state,
    cateId,
    fromDateFilter,
    toDateFilter,
    txtSearch,
    selectedStates,
  } = props;
  const categoryId = parseId(cateId);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageable, setPageable] = useState({ page: 1, size: 5 });

  const { auctions, totalPages, totalAuctions } = useAuctions(
    state,
    categoryId,
    fromDateFilter,
    toDateFilter,
    selectedStates,
    txtSearch,
    pageable
  );

  // Đang ở page 3 mà search ra có 2 page thì phải đẩy lại 1
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
      setPageable({ ...pageable, page: 1 });
    }
  }, [totalPages]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setPageable({ ...pageable, page: page });
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  const { t } = useTranslation(["Components"]);

  return (
    <>
      <div className="shop-toolbar">
        <div className="product-view-mode">
        </div>
        {auctions.length > 0 && (
          <div className="product-page_count">
            <p>
              Showing {currentPage} – {totalPages} of {totalAuctions} results
            </p>
          </div>
        )}
        {auctions.length === 0 && (
          <div className="product-page_count">
            <h3 className="fw-bold">
              {t("Rauria.Không tìm thấy phiên đấu giá phù hợp")}
            </h3>
          </div>
        )}
        <div className="product-item-selection_area"></div>
      </div>
      <div className="shop-product-wrap row listview">
        {React.Children.toArray(
          auctions.map((auction) => <AuctionItem auction={auction} />)
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default ContainerListAuctions;
