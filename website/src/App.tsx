import './App.css';
import { UserContext } from './hooks/useContext';
import { useLocation } from 'react-router-dom';
import Header from './layouts/components/Header/Header';
import Footer from './layouts/components/Footer/Footer';
import useAccount from './hooks/useAccount';
import RouterCom from './routers/RouterCom';

function App() {
  const token = localStorage.getItem("access_token");
  const { account, setAccount } = useAccount(token);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  return (
    <>
      <UserContext.Provider value={{ account, setAccount }} >
        {!isLandingPage && <Header />}
        <RouterCom />
        {!isLandingPage && <Footer />}
      </UserContext.Provider >
    </>
  );
}

export default App;
