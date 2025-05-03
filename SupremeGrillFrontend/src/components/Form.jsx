import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [customer, SetCustomer] = useState({
    custFirstName: "",
    custLastName: "",
    telephone: "",
    custEmail: "",
  });
  const apiURL = import.meta.env.VITE_BACKEND_API_URL;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    SetCustomer((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${apiURL}/customers`, customer);
      console.log("response", response.data);
      alert("Profile Completed!");
    } catch (error) {
      console.error("Error Submitting", error);
      alert("Submission Failed. Try Again");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your first name:
        <input
          type="text"
          name="custFirstName"
          value={customer.custFirstName || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        {" "}
        Enter your Surname:
        <input
          type="text"
          name="custLastName"
          value={customer.custLastName || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your Telephone Number:
        <input
          type="number"
          name="telephone"
          value={customer.telephone || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your email address:
        <input
          type="text"
          name="custEmail"
          value={customer.custEmail || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
