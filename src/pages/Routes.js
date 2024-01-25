import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Frontend from "./Frontend";
import Dashboard from "./Dashboard";
import Authentication from "./Authentication";

export function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Frontend />} />
        <Route path="authentication/*" element={<Authentication />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
