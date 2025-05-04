import { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import Button from "../components/Button";
const Register = (email, password) => {
  const [Register, SetRegister] = useState({});
  const [confirmPassword, SetConfirmPassword] = useState("");
  const apiURL = import.meta.env.VITE_BACKEND_API_URL;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    SetRegister((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmpassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post(
        `${apiURL}/Accounts/Register`,
        Register,
        {
          email,
          password,
        }
      );

      const token = response.data.token;
      console.log("response", response.data);
      alert("Logged in!");
    } catch (error) {
      console.error("Error Logging in", error);
      alert("Try again");
    }
  };

  return (
    <div className="user-container">
      <h1> Register</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={Register.email || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Password:
          <input
            type="text"
            name="password"
            value={Register.password || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Confirm Password:
          <input
            type="text"
            name="password"
            value={Register.confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <Button
          label="Register"
          style={{
            backgroundColor: "grey",
            color: "white ",
            padding: "5px 10px",
            fontSize: "1.1rem",
          }}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};
export default Register;
