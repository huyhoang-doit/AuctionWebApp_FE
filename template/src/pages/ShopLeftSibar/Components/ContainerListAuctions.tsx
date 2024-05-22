import React, { useEffect, useState } from 'react'
import { AuctionItem } from './AuctionItem'
import { getAuctions } from '../../../api/AuctionAPI';
import { Auction } from '../../../models/Auction';
import { useParams } from 'react-router-dom';

const ContainerListAuctions = () => {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const { state, cateId } = useParams();
  let categoryId = 0;

  try {
    categoryId = parseInt(cateId + "");
    if (Number.isNaN(categoryId)) {
      categoryId = 0;
    }
  } catch (error) {
    categoryId = 0;
    console.log("Error parsing auction id: " + error);
  }

  useEffect(() => {
    console.log(state)
    if (state !== undefined && categoryId === 0) {
      getAuctions(state, 0)
        .then((response) => {
          setAuctions(response.auctionsData);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
    if (state === undefined && categoryId !== 0) {
      getAuctions("", categoryId)
        .then((response) => {
          setAuctions(response.auctionsData);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
    if (state === undefined && categoryId === 0) {
      getAuctions("", 0)
        .then((response) => {
          setAuctions(response.auctionsData);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }, [state, categoryId]);


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
        {React.Children.toArray(auctions.map(
          (auction) => <AuctionItem auction={auction} />
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
    </>
  )
}

export default ContainerListAuctions
