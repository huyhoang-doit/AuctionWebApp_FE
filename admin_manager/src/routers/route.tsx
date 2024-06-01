import RouterComAdmin from './router-admin';
import RouterComManager from './router-manager';
//  import Login from './Login';

const RouterCom = () => {
  return (
    <>
      {/* <Login /> */}
      <RouterComAdmin />
      <RouterComManager />
    </>
  );
};

export default RouterCom;
