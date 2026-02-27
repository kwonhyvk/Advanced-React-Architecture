import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const validUser = {
    email: "oliviasutisno@gmail.com",
    password: "123456",
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (email === validUser.email && password === validUser.password) {
      dispatch({
        type: "LOGIN",
        payload: email,
      });

      navigate("/products");
    } else {
      alert("Email atau password salah");
    }
  }

  return (
    <div className="container-box" style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: "10px", fontSize: "12px" }}>
        Demo: oliviasutisno@gmail.com | 123456
      </p>
    </div>
  );
}