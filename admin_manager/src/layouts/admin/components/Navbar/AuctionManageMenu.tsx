import { useState } from "react";
import { Link } from "react-router-dom";
type Booleanish = true | false | 'true' | 'false';

const AuctionManageMenu: React.FC = () => {
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

        <span className="fa-solid fa-gavel" style={{ color: '#a6adc5' }} />
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          Quản lý đấu giá
          <i className="fa-solid fa-angle-down" style={{ marginLeft: '8px' }} />
        </span>

      </Link>
      {isExpanded && (
        <ul>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa-solid fa-scale-balanced" style={{ color: '#a6adc5', fontSize: '13px', marginRight: '10px' }}></i>
            <Link to="/manager/cac-phien-dau-gia">Danh sách các phiên đấu giá</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa-solid fa-circle-exclamation" style={{ color: '#a6adc5', fontSize: '13px', marginRight: '10px' }}></i>
            <Link to="/manager/phien-that-bai">Danh sách phiên đấu giá thất bại</Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default AuctionManageMenu;

