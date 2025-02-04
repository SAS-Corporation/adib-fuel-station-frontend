import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./Layout/Dashboard.jsx";
import AuthLayout from "./Layout/AuthLayout.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import NozzleConfigure from "./Pages/NozzleConfigure";
import BillCreate from "./Pages/BillCreate";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard/>}>
          <Route path="/" element={<App />} />
          <Route path="/nozzle-configuration" element={<NozzleConfigure/>} />
          <Route path="/bill-create" element={<BillCreate/>} />
        </Route>
        <Route element={<AuthLayout/>}>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
