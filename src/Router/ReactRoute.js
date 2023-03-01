import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Careers from "../Pages/Careers";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import Team from "../Pages/Team";
import Testimonials from "../Pages/Testimonials";

function ReactRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="home" element={<></>} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="team" element={<Team />} />
        <Route path="testimonials" element={<Testimonials />} />
      </Routes>
    </>
  );
}

export default ReactRoute;
