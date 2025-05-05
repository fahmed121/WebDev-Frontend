import axios from "axios";
import { useState, useEffect } from "react";

const Staff = () => {
  const apiURL = import.meta.env.VITE_BACKEND_API_URL;

  useEffect(() => {
    axios
      .get(`${apiURL}/staff`)
      .then((response) => {
        console.log("API response:", response.data);
        setItem(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="menu">
      <h2>Staff</h2>
      <p>
        Welcome to the Staff Dashboard Meet the team behind GrillMaster’s
        sizzling success. At the front, you'll find Alice Johnson, our Floor
        Manager, ensuring smooth service with a sharp eye and quick smile. In
        the kitchen, Chef Bob Smith crafts signature dishes with flame and
        flair, while Sous Chef Maria Lopez preps each plate to perfection. Our
        drinks expert, Jake Turner, mixes house favorites behind the bar, and
        Ella Nguyen, our Host, keeps the dining room running like clockwork.
        Together, they bring flavor, fire, and hospitality to every shift.
      </p>
    </div>
  );
};

export default Staff;
