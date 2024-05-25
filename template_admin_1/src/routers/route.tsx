import RouterComAdmin from './router-admin';
import RouterComManager from './router-manager';
import RouterComStaff from './router-staff';


const RouterCom = () => {
  return (
    <>
      <RouterComAdmin />
      <RouterComManager />
      <RouterComStaff />
    </>
  )
}

export default RouterCom
