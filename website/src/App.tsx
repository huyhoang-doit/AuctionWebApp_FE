import "./App.css";
import Footer from "./layouts/components/Footer/Footer";
import Header from "./layouts/components/Header/Header";
import RouterCom from "./routers/route";
import useAccount from "./hooks/useAccount";
import { UserContext } from "./hooks/useContext";

function App() {
    const token = localStorage.getItem("access_token");
    const user = useAccount(token);
    return (
        <>
            <UserContext.Provider value={{ user }} >
                <Header />
                <RouterCom />
                <Footer />
            </UserContext.Provider >
        </>
    );
}

export default App;
