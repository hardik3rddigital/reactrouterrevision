import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactRoute from "./Router/ReactRoute";
import Header from "./Base/Header";
import Footer from "./Base/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ReactRoute />
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
