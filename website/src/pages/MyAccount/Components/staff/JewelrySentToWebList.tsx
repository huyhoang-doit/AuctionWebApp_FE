import React, { useCallback, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { Jewelry } from "../../../../models/Jewelry";
import { getJewelriesByStateAndHolding } from "../../../../api/JewelryAPI";
import { ConfirmHoldingModal } from "../../Modal/ModalStaff";
import { useTranslation } from "react-i18next";
import { useDebouncedCallback } from "use-debounce";
import { useCategories } from "../../../../hooks/useCategories";
interface JewelrySentToWebProps {
  userId: number | undefined;
  listNumber: number;
}
const JewelrySentToWebList: React.FC<JewelrySentToWebProps> = ({
  userId,
  listNumber,
}) => {
  const jewelryState = "ACTIVE";
  const [jewelryRequestList, setJewelryList] = useState<Jewelry[]>([]);
  const [totalElements, setTotalElements] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [debouncedTxtSearch, setDebouncedTxtSearch] = useState("");
  const [txtSearch, setTxtSearch] = useState("");
  const { t } = useTranslation(["Staff"]);
  const [category, setCategory] = useState("Tất cả");
  const categories = useCategories();
  const categoryNames: (string | undefined)[] = categories.map(
    (category) => category.name
  );
  categoryNames.unshift("Tất cả");

  const debouncedTxtSearchChange = useDebouncedCallback((txtSearch: string) => {
    setDebouncedTxtSearch(txtSearch);
  }, 1000);

  const handleTxtSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTxtSearch(value);
    debouncedTxtSearchChange(value);
  };

  const handleChangeList = useCallback(async () => {
    setLoading(true);
    try {
      if (userId) {
        const response = await getJewelriesByStateAndHolding(
          jewelryState,
          debouncedTxtSearch,
          false,
          category,
          page
        );
        setJewelryList(response.jeweriesData);
        setTotalElements(response.totalElements);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [userId, page, debouncedTxtSearch, category]);

  useEffect(() => {
    setTxtSearch("");
    debouncedTxtSearchChange("");
    setCategory("Tất cả");
  }, [listNumber]);

  useEffect(() => {
    handleChangeList();
  }, [userId, page, listNumber, debouncedTxtSearch, category]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setPage(1);
    setTxtSearch("");
    debouncedTxtSearchChange("");
  };

  return (
    <>
      <div className="myaccount-orders">
        <div className="row mb-2">
          <div className="col-md-5">
          </div>
          <div className="umino-sidebar_categories col-md-4 mb-2 px-0 flex">
            <input
              style={{ height: "40px" }}
              type="text"
              placeholder={t("JewelrySentToWebList.Tên tài sản...")}
              value={txtSearch}
              onChange={handleTxtSearch}
            />
          </div>
          <div className="umino-sidebar_categories col-md-3 mb-2 flex">
            <select
              className="rounded"
              value={category}
              onChange={handleCategoryChange}
              style={{
                width: "100%",
                height: "40px",
                padding: "0 0 0 10px",
                borderColor: "#fdb828",
                borderWidth: "2px",
              }}
              required
            >
              {categoryNames.map((category, index) => (
                <option
                  style={{ padding: "5px" }}
                  key={index}
                  value={category}
                >
                  {t(`JewelriesWaitList.${category}`)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th>{t("JewelrySentToWebList.Mã tài sản")}</th>
                <th style={{ width: "25%" }}>
                  {t("JewelrySentToWebList.Tên tài sản")}
                </th>
                <th>{t("JewelrySentToWebList.Phân loại")}</th>
                <th>{t("JewelrySentToWebList.Chủ tài sản")}</th>
                <th>{t("JewelrySentToWebList.Trạng thái")}</th>
                <th>{t("JewelrySentToWebList.Thao tác")}</th>
              </tr>
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    <Spinner animation="border" />
                  </td>
                </tr>
              ) : jewelryRequestList.length > 0 ? (
                React.Children.toArray(
                  jewelryRequestList.map((jewelry) => (
                    <tr>
                      <td>{jewelry.id}</td>
                      <td className="text-start">{jewelry.name}</td>
                      <td>{jewelry.category?.name}</td>
                      <td>{jewelry.user?.fullName}</td>

                      {jewelry.isHolding === false ? (
                        <td className="fw-semibold text-danger">
                          {t("JewelrySentToWebList.Chưa nhận")}
                        </td>
                      ) : (
                        <td className="fw-semibold text-success">
                          {t("JewelrySentToWebList.Đã nhận")}
                        </td>
                      )}
                      <td>
                        <ConfirmHoldingModal
                          jewelry={jewelry}
                          handleChangeList={handleChangeList}
                        />
                      </td>
                    </tr>
                  ))
                )
              ) : (
                <td colSpan={6} className="text-center">
                  <h5 className="fw-semibold lh-base mt-2">
                    {t("JewelrySentToWebList.Không có tài sản nào")}
                  </h5>
                </td>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
        <PaginationControl
          page={page}
          between={3}
          total={totalElements}
          limit={5}
          changePage={(page) => {
            setPage(page);
          }}
          ellipsis={1}
        />
      </div>
    </>
  );
};

export default JewelrySentToWebList;
