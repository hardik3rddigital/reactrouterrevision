import React from "react";
import { Route, Routes } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="home" element={<>Home</>} />
        <Route path="about" element={<>About</>} />
      </Routes>
    </>
  );
}

export default Navbar;
