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

      <h1>Hello I am app components</h1>

      <Footer />
    </>
  );
}

export default App;
