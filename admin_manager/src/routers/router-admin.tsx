import { Route, Routes } from 'react-router-dom'
import Index from '../pages/admin/Index/Index'
import ManageManager from '../pages/admin/manage-account/ManageManager'
import ManageStaff from '../pages/admin/manage-account/ManageStaff'
import ManageUser from '../pages/admin/manage-account/ManageUser'
import TransactionWithSeller from '../pages/admin/transaction/TransactionWithSeller'
import TransactionWithBuyer from '../pages/admin/transaction/TransactionWithBuyer'
import TransactionWithUser from '../pages/admin/transaction/TransactionWithUser'
import ViewManager from '../pages/admin/View/ViewManager'
import ViewUser from '../pages/admin/View/ViewUser'
import ViewStaff from '../pages/admin/View/ViewStaff'
import ViewTransactionSeller from '../pages/admin/View/ViewTransactionSeller'
import ViewTransactionBuyer from '../pages/admin/View/ViewTransactionBuyer'
import ViewTransactionUser from '../pages/admin/View/ViewTransactionUser'

const RouterComAdmin = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Index />} />
        <Route path="/admin/account/manager" element={<ManageManager />} />
        <Route path="/admin/account/staff" element={<ManageStaff />} />
        <Route path="/admin/account/user" element={<ManageUser />} />
        <Route path="/admin/transaction/seller" element={<TransactionWithSeller />} />
        <Route path="/admin/transaction/buyer" element={<TransactionWithBuyer />} />
        <Route path="/admin/transaction/user" element={<TransactionWithUser />} />
        <Route path="/admin/view/viewmanager" element={<ViewManager />} />
        <Route path="/admin/view/viewUser" element={<ViewUser />} />
        <Route path="/admin/view/viewStaff" element={<ViewStaff />} />
        <Route path="/admin/view/ViewTransactionSeller" element={<ViewTransactionSeller />} />
        <Route path="/admin/view/ViewTransactionBuyer" element={<ViewTransactionBuyer />} />
        <Route path="/admin/view/ViewTransactionUser" element={<ViewTransactionUser />} />
      </Routes>
    </>
  )
}

export default RouterComAdmin