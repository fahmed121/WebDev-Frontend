import { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { UseAuth } from "../context/AuthContext";

const Login = () => {
  const [login, SetLogin] = useState({});
  const navigate = useNavigate();
  const apiURL = import.meta.env.VITE_BACKEND_API_URL;
  const { setUser } = UseAuth();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    SetLogin((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${apiURL}/Accounts/login`, login);

      const token = response.data.token;

      console.log("response", response.data);
      localStorage.setItem("token", token);
      const user = jwtDecode(token);
      setUser(user);

      navigate("/menu");
    } catch (error) {
      console.error("Error Logging in", error);
      alert("Try again");
    }
  };

  return (
    <div className="user-container">
      <h1> Login</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={login.email || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Password:
          <input
            type="text"
            name="password"
            value={login.password || ""}
            onChange={handleChange}
          />
        </label>

        <Button
          class="authbutton"
          label="Submit"
          style={{
            backgroundColor: "grey",
            color: "white ",
            padding: "5px 10px",
            fontSize: "1.1rem",
          }}
          onClick={handleSubmit}
        />
        <Link className="authbutton" to="/register">
          Register
        </Link>
      </form>
    </div>
  );
};
export default Login;
