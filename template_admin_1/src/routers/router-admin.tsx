import { Route, Routes } from "react-router-dom";
import Index from "../pages/admin/Index/Index";
import ManageManager from "../pages/admin/manage-account/ManageManager";
import ManageStaff from "../pages/admin/manage-account/ManageStaff";
import ManageUser from "../pages/admin/manage-account/ManageUser";
import TransactionWithSeller from "../pages/admin/transaction/TransactionWithSeller";
import TransactionWithBuyer from "../pages/admin/transaction/TransactionWithBuyer";
import TransactionWithUser from "../pages/admin/transaction/TransactionWithUser";
const RouterComAdmin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin" element={<Index />} />
        <Route path="/admin/account/manager" element={<ManageManager />} />
        <Route path="/admin/account/staff" element={<ManageStaff />} />
        <Route path="/admin/account/user" element={<ManageUser />} />
        <Route
          path="/admin/transaction/seller"
          element={<TransactionWithSeller />}
        />
        <Route
          path="/admin/transaction/buyer"
          element={<TransactionWithBuyer />}
        />
        <Route
          path="/admin/transaction/user"
          element={<TransactionWithUser />}
        />
      </Routes>
    </>
  );
};

export default RouterComAdmin;
