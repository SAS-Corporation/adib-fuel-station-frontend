import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./Layout/Dashboard.jsx";
import AuthLayout from "./Layout/AuthLayout.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard/>}>
          <Route path="/" element={<App />} />
          <Route path="/hi" element={<p>Hi from Public Layout!</p>} />
        </Route>
        <Route element={<AuthLayout/>}>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
