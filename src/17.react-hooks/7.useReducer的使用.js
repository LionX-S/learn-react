import React, { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
  }
}
export default function App() {
  const [count, setCount] = useState(0);
  // 第一个参数为一个reducer函数，第二个参数为初始值
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div>
      <h2>当前计数(useState)：{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+</button>
      <button onClick={(e) => setCount(count - 1)}>-</button>

      <h2>当前计数(useReducer)：{state.counter}</h2>
      <button onClick={(e) => dispatch({ type: "increment" })}>+</button>
      <button onClick={(e) => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
