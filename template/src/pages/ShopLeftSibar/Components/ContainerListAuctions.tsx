import React, { useEffect, useState } from 'react'
import { AuctionItem } from './AuctionItem'
import { getAuctions } from '../../../api/AuctionAPI';
import { Auction } from '../../../models/Auction';

const ContainerListAuctions = () => {
  const [auctions, setAuctions] = useState<Auction[]>([]);

  useEffect(() => {
    getAuctions()
      .then((response) => {
        setAuctions(response.auctionsData);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  
  return (
    <div className="col-lg-9 order-1 order-lg-2">
      <div className="shop-banner_area">
        <div className="banner-item img-hover_effect">
          <a href="javascript:void(0)">
            <img
              src="assets/images/shop/1.jpg"
              alt="Umino's Shop Banner"
            />
          </a>
        </div>
      </div>
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
          <p>Showing 1–9 of 40 results</p>
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
        {auctions.map((auction) => (
          <AuctionItem key={auction.id} auction={auction} />
        ))}
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="umino-paginatoin-area">
            <ul className="umino-pagination-box">
              <li className="active">
                <a href="javascript:void(0)">
                  1
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  2
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  3
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  4
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  5
                </a>
              </li>
              <li>
                <a
                  className="Next"
                  href="javascript:void(0)"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerListAuctions
