import React, { FocusEvent, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
    onFilter: (fromDate: string, toDate: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onFilter }) => {
    const [fromDate, setFromDate] = useState<string>('');
    const [toDate, setToDate] = useState<string>('');

    const handleFilter = () => {
        onFilter(fromDate, toDate);
    };

    const handleFocus = (e : FocusEvent<HTMLInputElement>) => {
        e.currentTarget.type = 'date';
    };

    const handleClearFilter = () => {
        setFromDate('');
        setToDate('');
    };

    return (
        <div className="filter-date mt-4 mb-4s">
            <div className="filter-date-body" style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                <div className="from-date-container">
                    <label style={{ fontWeight: 600 }}>Từ ngày</label>
                    <div id="fromDate" className="input-group date datepicker" data-date-format="mm-dd-yyyy" style={{ padding: 0 }}>
                        <span className="input-group-addon" style={{ backgroundColor: 'white', border: 'unset', borderBottom: '1px solid #e5ecef', borderRadius: 0, padding: '5px' }}>
                            <i className="fa-solid fa-calendar"></i>
                        </span>
                        <input
                            className="form-control"
                            type="text"
                            value={fromDate}
                            onFocus={handleFocus}
                            onChange={(e) => setFromDate(e.target.value)}
                            style={{ border: 'none', borderBottom: '1px solid #e5ecef', boxShadow: 'unset', borderRadius: 0 }}
                        />
                    </div>
                </div>
                <div className="to-date-container">
                    <label style={{ fontWeight: 600 }}>Đến ngày</label>
                    <div id="toDate" className="input-group date datepicker" data-date-format="mm-dd-yyyy" style={{ padding: 0 }}>
                        <span className="input-group-addon" style={{ backgroundColor: 'white', border: 'unset', borderBottom: '1px solid #e5ecef', borderRadius: 0, padding: '5px' }}>
                            <i className="fa-solid fa-calendar"></i>
                        </span>
                        <input
                            className="form-control"
                            type="text"
                            value={toDate}
                            onFocus={handleFocus}
                            onChange={(e) => setToDate(e.target.value)}
                            style={{ border: 'none', borderBottom: '1px solid #e5ecef', boxShadow: 'unset', borderRadius: 0 }}
                        />
                    </div>
                </div>
            </div>
            <div className='mb-4'>
                <input type="button" className="button Buttonbtn me-2" id="btnFilterCategory" value="Lọc" onClick={handleFilter} />
                <input type="button" className="button Buttonbtn" id="btnCleanFilterCategory" value="Bỏ Lọc" onClick={handleClearFilter} />
            </div>
        </div>
    );
};

export default DatePicker;
