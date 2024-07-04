import { useState } from "react";
import "./App.css";
import useAccount from "./hooks/useAccount";
import { UserContext } from "./hooks/useContext";
import Footer from "./layouts/admin/components/Footer";
import Header from "./layouts/admin/components/Header";
import Navbar from "./layouts/admin/components/Navbar";
import RouterCom from "./routers/RouterCom";
import { Login } from "./routers/Login";

function App() {
  const token = localStorage.getItem('access_token');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const token = localStorage.getItem('access_token');
    return !!token;
  });
  const account = useAccount(token);

  return (
    <>
      <UserContext.Provider value={{ account }}>
        {isLoggedIn ?
          (
            <>
              <Navbar />
              <Header />
              <RouterCom />
              <Footer />
            </>
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} />
          )}
      </UserContext.Provider>
    </>
  );
}

export default App;
