import React, { ChangeEvent, useEffect, useState } from 'react'
import { SideBarCategoryItem } from './SideBarCategoryItem'
import DatePicker from './DatePickerProps '
import { useNavigate } from 'react-router-dom'
import { useCategories } from '../../../hooks/useCategories';
import { useDebouncedCallback } from 'use-debounce';

interface SideBarProps {
  setSelectedStates: (checkboxValues: string[]) => void;
  state: string | undefined;
}

const SideBar: React.FC<SideBarProps> = (props) => {
  const categories = useCategories();
  const [checkboxValues, setCheckboxValues] = useState([true, false, false, false]);
  const navigate = useNavigate();

  useEffect(() => {
    if (props.state) {
      const newCheckboxValues = [false, false, false, false];
      switch (props.state) {
        case 'WAITING':
          newCheckboxValues[1] = true;
          break;
        case 'ONGOING':
          newCheckboxValues[2] = true;
          break;
        case 'FINISHED':
          newCheckboxValues[3] = true;
          break;
        default:
          newCheckboxValues[0] = true;
      }
      setCheckboxValues(newCheckboxValues);
    }
  }, [props.state]);

  const handleCheckboxChange = (index: number) => {
    navigate(`/danh-sach-dau-gia`)
    // Nếu checkbox đc click
    if (index === 0) {
      // Nếu chọn tất cả thì những còn lại bỏ
      const newCheckboxValues = checkboxValues.map((_, i) => i === 0);
      setCheckboxValues(newCheckboxValues);
    } else {
      // copy mảng
      const newCheckboxValues = [...checkboxValues];

      // Nếu chọn 1, 2 ,3 thì tất cả bỏ
      if (index <= 3 && newCheckboxValues[0]) {
        newCheckboxValues[0] = false;
      }

      // Chuyển đổi trạng thái đã chọn của hộp kiểm tại chỉ mục đã chỉ định
      newCheckboxValues[index] = !newCheckboxValues[index];

      // Cập nhật trạng thái với mảng mới
      setCheckboxValues(newCheckboxValues);
    }
  };

  const handleFilter = (fromDateFilter: string, toDateFilter: string) => {
    const url = !fromDateFilter && !toDateFilter ? '/danh-sach-dau-gia' : `/danh-sach-dau-gia/date/${fromDateFilter}/${toDateFilter}`;
    navigate(url);
  };

  const debouncedTxtSearchChange = useDebouncedCallback((value: string) => {
    navigate(value ? `/danh-sach-dau-gia/name/${value}` : '/danh-sach-dau-gia');
  }, 1000);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedTxtSearchChange(e.target.value);
  }

  useEffect(() => {
    if (checkboxValues[1] === true && checkboxValues[2] === true && checkboxValues[3] === true) {
      setCheckboxValues([true, false, false, false]);
    }
    const selectedStates = checkboxValues.reduce((acc: string[], isChecked: boolean, index: number) => {
      if (isChecked && index !== 0) {
        acc.push(index === 1 ? 'WAITING' : index === 2 ? 'ONGOING' : 'FINISHED');
      }
      return acc;
    }, []);
    props.setSelectedStates(selectedStates);
  }, [checkboxValues]);

  return (
    <div className="col-lg-3 order-2 order-lg-1">
      <div className="umino-sidebar-catagories_area">
        <div className="umino-sidebar_categorie">
          <div className="umino-categories_title first-child">
            <h5 className='fw-bold'>Lọc theo ngày</h5>
          </div>
          <DatePicker onFilter={handleFilter} />
        </div>
        <div className="umino-sidebar_categories category-module">
          <div className="umino-categories_title">
            <h5 className='fw-bold'>Trạng thái tài sản</h5>
          </div>
          <div className="sidebar-categories_menu">
            <div className="form-inner">
              {checkboxValues.map((isChecked, index) => (
                <label key={index} className="containercheckbox" style={{ fontSize: "16px", marginBottom: "15px" }}>
                  {index === 0 ? "Tất cả" : index === 1 ? "Sắp diễn ra" : index === 2 ? "Đang diễn ra" : "Đã kết thúc"}
                  <span id="count-all"></span>
                  <input
                    type="checkbox"
                    className={`checkbox-status status-${index}`}
                    name="checkbox-status"
                    value={index}
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
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
          <input type="text" placeholder="Tìm kiếm sản phẩm..." onChange={handleSearch} />
        </div>
        <div className="umino-sidebar_categories umino-banner_area sidebar-banner_area">
          <div className="banner-item img-hover_effect">
            <div className="banner-img">
              <img
                className="img-full"
                src="/assets/images/banner/3-1.jpg"
                alt=" Banner"
              />
            </div>
            <div className="banner-content banner-content-2">
              <span>Auction Company</span>
              <h4>DGS</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
