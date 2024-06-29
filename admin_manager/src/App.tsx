import "./App.css";
import useAccount from "./hooks/useAccount";
import { UserContext } from "./hooks/useContext";
import Footer from "./layouts/admin/components/Footer";
import Header from "./layouts/admin/components/Header";

import Navbar from "./layouts/admin/components/Navbar";

import RouterCom from "./routers/RouterCom";
// import Navbar from "./layouts/manager/Navbar";


function App() {
  const token = localStorage.getItem("access_token");
  const account = useAccount(token);

  return (
    <>
      <UserContext.Provider value={{ account }}>
        {account ? (
          <>
            <Navbar />
            <Header />
            <RouterCom />
            <Footer />
          </>
        ) : (
          <>
            <RouterCom />
          </>
        )}
      </UserContext.Provider>
    </>
  );
}

export default App;