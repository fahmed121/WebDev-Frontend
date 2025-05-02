import { useState } from "react";
import Button from "./Button";

function Counter(onChange) {
  const [count, setCount] = useState(0);

  const handleChange = (newCount) => {
    setCount(newCount);
    onChange && onChange(newCount);
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Button
        label="-"
        style={{
          margin: "1px",
          backgroundColor: "red",
          color: "white ",
          padding: "5px 10px",
          fontSize: "1.1rem",
        }}
        onClick={() => setCount(count - 1)}
      >
        -
      </Button>
      <span style={{ minWidth: "50px", textAlign: "center" }}>{count}</span>
      <Button
        label="+"
        style={{
          backgroundColor: "green",
          color: "white ",
          padding: "5px 10px",
          fontSize: "1.1rem",
        }}
        onClick={() => setCount(count + 1)}
      >
        -
      </Button>
    </div>
  );
}

export default Counter;
