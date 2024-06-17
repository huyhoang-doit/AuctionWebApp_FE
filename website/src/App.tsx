import './App.css';
import { UserContext } from './hooks/useContext';
import Header from './layouts/components/Header/Header';
import Footer from './layouts/components/Footer/Footer';
import useAccount from './hooks/useAccount';
import RouterCom from './routers/RouterCom';
import { ToastContainer } from 'react-bootstrap';
function App() {
  const token = localStorage.getItem("access_token");
  const { account, setAccount } = useAccount(token);
  return (
    <>
      <UserContext.Provider value={{ account, setAccount }} >
        <Header />
        <RouterCom />
        <Footer />
      </UserContext.Provider >
    </>
  );
}

export default App;
