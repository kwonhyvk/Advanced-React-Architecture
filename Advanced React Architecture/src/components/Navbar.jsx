import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  function handleLogout() {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  }

  return (
    <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
      <span>User: {state.user}</span>
      <span>Total: ${state.totalPrice}</span>

      <Link to="/products">Products</Link>
      <Link to="/checkout">Checkout</Link>

      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}