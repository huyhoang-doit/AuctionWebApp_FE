import React, { useEffect, useState } from 'react'
import AuctionsByCategories from './AuctionsByCategories'
import { SideBarCategoryItem } from './SideBarCategoryItem'
import { Category } from '../../../models/Category'
import { getAllCategories } from '../../../api/CategoryAPI'
import DatePicker from './DatePickerProps '

const SideBar = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [fromDate, setFromDate] = useState<string>('');
  const [toDate, setToDate] = useState<string>('');

  const handleFilter = () => {
    onFilter(fromDate, toDate);
  };

  useEffect(() => {
    getAllCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const onFilter = (fromDate: string, toDate: string) => {
    setFromDate(fromDate);
    setToDate(toDate);
  };

  return (
    <div className="col-lg-3 order-2 order-lg-1">
      <div className="umino-sidebar-catagories_area">
        <div className="umino-sidebar_categorie">
          <div className="umino-categories_title first-child">
            <h5 className='fw-bold'>Lọc theo ngày</h5>
          </div>
          <DatePicker onFilter={onFilter}/>
        </div>
        <div className="umino-sidebar_categories category-module">
          <div className="umino-categories_title">
            <h5 className='fw-bold'>Trạng thái tài sản</h5>
          </div>
          <div className="sidebar-categories_menu">
            <div className="form-inner">
              <label className="containercheckbox">
                Tất cả <span id="count-all"></span>
                <input type="checkbox" className="status-checkall" name="checkbox-status" value="0" />
                <span className="checkmark"></span>
              </label><br />
              <label className="containercheckbox">
                Sắp diễn ra
                <input type="checkbox" className="checkbox-status" name="checkbox-status" value="1" />
                <span className="checkmark"></span>
              </label><br />
              <label className="containercheckbox">
                Đang diễn ra
                <input type="checkbox" className="checkbox-status" name="checkbox-status" value="2" />
                <span className="checkmark"></span>
              </label><br />
              <label className="containercheckbox">
                Đã kết thúc
                <input type="checkbox" className="checkbox-status" name="checkbox-status" value="3" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="umino-sidebar_categories">
          <div className="umino-categories_title">
            <h5 className='fw-bold mt-4'>Danh mục</h5>
          </div>
          <ul className="sidebar-checkbox_list">
            {categories.map((category, index) => (
              <SideBarCategoryItem category={category} key={index} />
            ))}
          </ul>
        </div>
        <div className="umino-sidebar_categories">
          <div className="umino-categories_title umino-tags_title mt-4">
            <h5 className='fw-bold'>Tìm kiếm</h5>
          </div>
          <input type="text" placeholder="Tìm kiếm sản phẩm..." />
        </div>
        <div className="umino-sidebar_categories umino-banner_area sidebar-banner_area">
          <div className="banner-item img-hover_effect">
            <div className="banner-img">
              <a href="javascript:void(0)">
                <img
                  className="img-full"
                  src="assets/images/banner/3-1.jpg"
                  alt=" Banner"
                />
              </a>
            </div>
            <div className="banner-content banner-content-2">
              <span>Auction Company</span>
              <h4>DGS</h4>
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
