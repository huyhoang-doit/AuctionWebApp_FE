import "./App.css";
import Footer from "./layouts/components/Footer/Footer";
import Header from "./layouts/components/Header/Header";
import RouterCom from "./routers/Route";
import React from "react";

function App() {
    return (
        <>
            <Header />
            <RouterCom />
            <Footer />
        </>
    );
}

export default App;
