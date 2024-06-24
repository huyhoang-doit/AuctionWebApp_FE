import React, { FocusEvent, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";

interface DatePickerProps {
  onFilter: (fromDate: string, toDate: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onFilter }) => {
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [error, setError] = useState("");
  const { t } = useTranslation(["Components"]);

  const handleFilter = () => {
    if (fromDate === "") {
      setError(t("Rauria.Bạn phải chỉ định ngày tìm từ"));
      return;
    } else if (toDate === "") {
      setError(t("Rauria.Bạn phải chỉ định ngày tìm đến"));
      return;
    }
    setError("");
    onFilter(fromDate, toDate);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.currentTarget.type = "date";
  };

  const handleClearFilter = () => {
    setFromDate("");
    setToDate("");
    onFilter("", "");
  };

  return (
    <div className="filter-date mt-4 mb-4s">
      {error && <span className="fw-bold text-danger">{error}</span>}
      <div
        className="filter-date-body"
        style={{ display: "flex", gap: "5px", marginBottom: "15px" }}
      >
        <div className="from-date-container">
          <label style={{ fontWeight: 600 }}>{t("Rauria.Từ ngày")}</label>
          <div
            id="fromDate"
            className="input-group date datepicker"
            data-date-format="mm-dd-yyyy"
            style={{ padding: 0 }}
          >
            <span
              className="input-group-addon"
              style={{
                backgroundColor: "white",
                border: "unset",
                borderBottom: "1px solid #e5ecef",
                borderRadius: 0,
                padding: "5px",
              }}
            >
              <i className="fa-solid fa-calendar"></i>
            </span>
            <input
              className="form-control"
              type="text"
              value={fromDate}
              onFocus={handleFocus}
              onChange={(e) => setFromDate(e.target.value)}
              style={{
                border: "none",
                borderBottom: "1px solid #e5ecef",
                boxShadow: "unset",
                borderRadius: 0,
              }}
            />
          </div>
        </div>
        <div className="to-date-container">
          <label style={{ fontWeight: 600 }}>{t("Rauria.Đến ngày")}</label>
          <div
            id="toDate"
            className="input-group date datepicker"
            data-date-format="mm-dd-yyyy"
            style={{ padding: 0 }}
          >
            <span
              className="input-group-addon"
              style={{
                backgroundColor: "white",
                border: "unset",
                borderBottom: "1px solid #e5ecef",
                borderRadius: 0,
                padding: "5px",
              }}
            >
              <i className="fa-solid fa-calendar"></i>
            </span>
            <input
              className="form-control"
              type="text"
              value={toDate}
              onFocus={handleFocus}
              onChange={(e) => setToDate(e.target.value)}
              style={{
                border: "none",
                borderBottom: "1px solid #e5ecef",
                boxShadow: "unset",
                borderRadius: 0,
              }}
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <input
          type="button"
          className="button Buttonbtn me-2"
          id="btnFilterCategory"
          value={t("Rauria.Lọc")}
          onClick={handleFilter}
        />
        <input
          type="button"
          className="button Buttonbtn"
          id="btnCleanFilterCategory"
          value={t("Rauria.Bỏ Lọc")}
          onClick={handleClearFilter}
        />
      </div>
    </div>
  );
};

export default DatePicker;
