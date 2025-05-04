import { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
const Login = (email, password) => {
  const [login, SetLogin] = useState({});

  const apiURL = import.meta.env.VITE_BACKEND_API_URL;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    SetLogin((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${apiURL}/Accounts/login`, login, {
        email,
        password,
      });

      const token = response.data.token;
      console.log("response", response.data);
      alert("Logged in!");
    } catch (error) {
      console.error("Error Logging in", error);
      alert("Try again");
    }
  };

  return (
    <div className="login-container">
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

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Login;
