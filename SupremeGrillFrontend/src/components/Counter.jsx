import { useState } from "react";
import Button from "./Button";

function Counter({ onChange }) {
  const [count, setCount] = useState(0);

  const handleChange = (newCount) => {
    console.log("Counter - New count:", newCount);
    setCount(newCount);
    onChange(newCount);
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Button
        label="-"
        style={{
          margin: "0px",
          backgroundColor: "red",
          color: "white ",
          padding: "5px 10px",
          fontSize: "1.1rem",
        }}
        onClick={() => handleChange(count - 1 < 0 ? 0 : count - 1)}
      ></Button>
      <span style={{ minWidth: "50px", textAlign: "center" }}>{count}</span>
      <Button
        label="+"
        style={{
          backgroundColor: "green",
          color: "white ",
          padding: "5px 10px",
          fontSize: "1.1rem",
        }}
        onClick={() => handleChange(count + 1)}
      ></Button>
    </div>
  );
}

export default Counter;
