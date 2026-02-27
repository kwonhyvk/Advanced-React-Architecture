import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

export default function Summary() {
  const { state } = useContext(AppContext);

  return (
    <div className="container summary">
      <h2>Order Confirmed ✅</h2>
      <p>Thank you, {state.user}</p>

      <Link to="/products">Back to Products</Link>
    </div>
  );
}