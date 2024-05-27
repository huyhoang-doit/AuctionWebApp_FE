import './App.css';
import Footer from './layouts/admin/components/Footer';
import Header from './layouts/admin/components/Header';
import Navbar from './layouts/admin/components/Navbar';
import RouterCom from './routers/route';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header />}
      {!isLoginPage && <Navbar />}
      <RouterCom />
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
