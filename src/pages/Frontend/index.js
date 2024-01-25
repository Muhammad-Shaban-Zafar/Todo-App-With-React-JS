import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Frontend/components/Header";
import Footer from "../Frontend/components/Footer";

import Home from "./Home";
import About from "./About";

export default function index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </>
  );
}
