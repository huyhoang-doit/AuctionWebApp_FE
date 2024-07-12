import { useState } from "react";
import { Link } from "react-router-dom";
type Booleanish = true | false | 'true' | 'false';

const TransactionHistoryMenu: React.FC = () => {
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
        <img src="/assets/img/menu-icon/7.svg" alt="menu icon" />
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          Lịch sử giao dịch
          <i className="fa-solid fa-angle-down" style={{ marginLeft: '8px' }} />
        </span>

      </Link>
      {isExpanded && (
        <ul>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa-solid fa-circle-dollar-to-slot" style={{ color: '#a6adc5', fontSize: '13px', marginRight: '10px' }}></i>
            <Link to="/manager/giao-dich/nguoi-ban">Giao dịch với người bán</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa-solid fa-circle-dollar-to-slot" style={{ color: '#a6adc5', fontSize: '13px', marginRight: '10px' }}></i>
            <Link to="/manager/giao-dich/nguoi-mua">Giao dịch với người mua</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa-solid fa-circle-dollar-to-slot" style={{ color: '#a6adc5', fontSize: '13px', marginRight: '10px' }}></i>
            <Link to="/manager/giao-dich/dang-ky-tham-gia">Đăng ký tham gia</Link>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa-solid fa-repeat" style={{ color: '#a6adc5', fontSize: '13px', marginRight: '10px' }}></i>
            <Link to="/manager/giao-dich/hoan-tien">Hoàn tiền</Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default TransactionHistoryMenu;

