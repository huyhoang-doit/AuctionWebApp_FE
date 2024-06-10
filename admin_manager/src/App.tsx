import "./App.css";
import useAccount from "./hooks/useAccount";
import { UserContext } from "./hooks/useContext";
import Footer from "./layouts/admin/components/Footer";
import Header from "./layouts/admin/components/Header";

import Navbar from "./layouts/admin/components/Navbar";

import Login from "./routers/Login";
// import Navbar from "./layouts/manager/Navbar";

import RouterCom from "./routers/route";

function App() {
  const token = localStorage.getItem("access_token");
  const user = useAccount(token);

  return (
    <>
      <UserContext.Provider value={{ user }}>
        {user ? (
          <>
            <Navbar />
            <Header />
            <RouterCom />
            <Footer />
          </>
        ) : (
          <Login />
        )}
      </UserContext.Provider>
    </>
  );
}

export default App;
