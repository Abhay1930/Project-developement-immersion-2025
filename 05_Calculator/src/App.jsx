import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (val) => {
    if (val === "C") {
      setInput("");
    } else if (val === "=") {
      try {
        setInput(compute(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      if (input === "Error") setInput(val);
      else setInput(input + val);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => handleClick(btn)}
            className={btn === "C" ? "clear" : ""}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;

// Custom compute logic (no eval)
function compute(expr) {
  const tokens = expr.match(/(\d+\.?\d*|\.\d+|[+\-*/])/g);
  if (!tokens) throw new Error("Invalid");

  const output = [];
  const ops = [];
  const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };

  for (let token of tokens) {
    if (!isNaN(token)) {
      output.push(parseFloat(token));
    } else if ("+-*/".includes(token)) {
      while (
        ops.length &&
        precedence[ops[ops.length - 1]] >= precedence[token]
      ) {
        output.push(ops.pop());
      }
      ops.push(token);
    }
  }

  while (ops.length) output.push(ops.pop());

  const stack = [];
  for (let token of output) {
    if (typeof token === "number") stack.push(token);
    else {
      const b = stack.pop();
      const a = stack.pop();
      if (token === "+") stack.push(a + b);
      if (token === "-") stack.push(a - b);
      if (token === "*") stack.push(a * b);
      if (token === "/") stack.push(a / b);
    }
  }

  if (stack.length !== 1) throw new Error("Bad expression");
  return stack[0];
}
