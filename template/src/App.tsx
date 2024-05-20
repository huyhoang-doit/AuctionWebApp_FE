import { useEffect } from "react";
import "./App.css";
import Footer from "./layouts/components/Footer/Footer";
import Header from "./layouts/components/Header/Header";
import RouterCom from "./routers/route";

function App() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'assets/js/main.js';
        script.type = 'text/javascript';
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <Header />
            <RouterCom />
            <Footer />
        </>
    );
}

export default App;
