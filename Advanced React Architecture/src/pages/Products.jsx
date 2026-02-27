import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import headphone from "../assets/headphone.jpg"; 
import keyboard from "../assets/keyboard.jpg";
import mouse from "../assets/mouse.jpg";
import monitor from "../assets/monitor.jpg";


const products = [
  { id: 1, name: "Headphone", price: 100, image: headphone },
  { id: 2, name: "Keyboard", price: 80, image: keyboard },
  { id: 3, name: "Mouse", price: 40, image: mouse },
  { id: 4, name: "Monitor", price: 200, image: monitor },
  { id: 5, name: "Laptop", price: 800, image: monitor },
  { id: 6, name: "Tablet", price: 300, image: monitor },
];

export default function Products() {
  const { dispatch } = useContext(AppContext);

  return (
    
    <div className="container">
      <h2>Products</h2>

      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <h4>{p.name}</h4>
            <p>${p.price}</p>
            <button
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: p })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}