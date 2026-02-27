import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

import Login from "./pages/Login";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Summary from "./pages/Summary";
import Navbar from "./components/Navbar";

export default function App() {
  const { state } = useContext(AppContext);
  const location = useLocation();

  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && state.isAuthenticated && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/products"
          element={state.isAuthenticated ? <Products /> : <Navigate to="/login" />}
        />

        <Route
          path="/checkout"
          element={state.isAuthenticated ? <Checkout /> : <Navigate to="/login" />}
        />

        <Route
          path="/summary"
          element={state.isAuthenticated ? <Summary /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}