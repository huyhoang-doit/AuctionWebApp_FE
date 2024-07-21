import { useState } from "react";
import { Link } from "react-router-dom";
type Booleanish = true | false | 'true' | 'false';

const AssetManageMenu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li>
      <Link
        className="has-arrow"
        to="#"
        onClick={handleToggle}
        aria-expanded={isExpanded.toString() as Booleanish}
      >
        <i className="fa-solid fa-clipboard-list"></i>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          Quản lý tài sản
          <i className="fa-solid fa-angle-down" style={{ marginLeft: '8px' }} />
        </span>

      </Link>
      {isExpanded && (
        <ul>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa-solid fa-boxes-packing" style={{ color: '#a6adc5', fontSize: '13px', marginRight: '10px' }}></i>
            <Link to="/manager/quan-li-tai-san">Danh sách tài sản</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa-solid fa-clipboard-question" style={{ color: '#a6adc5', fontSize: '13px', marginRight: '10px' }}></i>
            <Link to="/manager/yeu-cau-dau-gia">Danh sách tài sản cần phê duyệt</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa-solid fa-clipboard-check" style={{ color: '#a6adc5', fontSize: '13px', marginRight: '10px' }}></i>
            <Link to="/manager/tai-san-dang-cho">Danh sách tài sản đủ điều kiện đấu giá</Link>
          </li>
          {/* <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa-solid fa-repeat" style={{ color: '#a6adc5', fontSize: '13px', marginRight: '10px' }}></i>
            <Link to="/manager/tai-san-dang-cho">Danh sách tài sản hoàn trả cho người vi phạm</Link>
          </li> */}
        </ul>
      )}
    </li>
  );
};

export default AssetManageMenu;

