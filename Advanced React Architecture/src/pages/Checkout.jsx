import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  function placeOrder() {
    dispatch({ type: "CLEAR_CART" });
    navigate("/summary");
  }

  return (
    <div className="container">
  <h2>Checkout</h2>

  {state.cart.map((item) => (
    <div key={item.id} className="checkout-item">
      <span>{item.name}</span>
      <span>${item.price}</span>
    </div>
  ))}

  <div className="total">Total: ${state.totalPrice}</div>

  <button className="place-order" onClick={placeOrder}>
    Place Order
  </button>
</div>
  );
}