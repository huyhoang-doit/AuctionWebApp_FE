import { Route, Routes } from 'react-router-dom'
import ManageManager from '../pages/admin/manage-account/ManageManager'
import ManageStaff from '../pages/admin/manage-account/ManageStaff'
import ManageUser from '../pages/admin/manage-account/ManageMember'
import ViewUser from '../pages/admin/View/ViewUser'
import ViewTransactionSeller from '../pages/admin/View/ViewTransactionSeller'
import ViewTransactionBuyer from '../pages/admin/View/ViewTransactionBuyer'
import ViewTransactionUser from '../pages/admin/View/ViewTransactionUser'
import ViewProfile from '../pages/admin/View/ViewProfile'
import GuestRoute from './GuestRoute'
import Index from '../pages/Index/Index'
import ProtectedRoute from './ProtectedRoute'

const RouterComAdmin = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute roles={['ADMIN']} />}>
          <Route element={<GuestRoute />}>
            <Route path="/admin" element={<Index />} />
            <Route path="/admin/account/manager" element={<ManageManager />} />
            <Route path="/admin/account/staff" element={<ManageStaff />} />
            <Route path="/admin/account/user" element={<ManageUser />} />
            <Route path="/admin/chi-tiet-nguoi-dung/:id" element={<ViewUser />} />
            <Route path="/admin/view/ViewTransactionSeller" element={<ViewTransactionSeller />} />
            <Route path="/admin/view/ViewTransactionBuyer" element={<ViewTransactionBuyer />} />
            <Route path="/admin/view/ViewTransactionUser" element={<ViewTransactionUser />} />
            <Route path="/admin/view/ViewProfile" element={<ViewProfile />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default RouterComAdmin