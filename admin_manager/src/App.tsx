import { useEffect, useState } from "react";
import "./App.css";
import useAccount from "./hooks/useAccount";
import { UserContext } from "./hooks/useContext";
import Footer from "./layouts/admin/components/Footer";
import Header from "./layouts/admin/components/Header";
import Navbar from "./layouts/admin/components/Navbar";
import RouterCom from "./routers/RouterCom";
import { User } from "./models/User";
import { Login } from "./routers/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [account, setAccount] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
      setAccount(useAccount(token));
    } else {
      setIsLoggedIn(false);
      setAccount(null);
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={{ account }}>
        {isLoggedIn ? (
          <>
            <Navbar />
            <Header />
            <RouterCom />
            <Footer />
          </>
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn}/>
        )}
      </UserContext.Provider>
    </>
  );
}

export default App;
