"use client";
import counter from "@/redux/slice/counter";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { increment, decrement, incrementByAmount } = counter.actions;
  const [value, setValue] = useState(3);
  return (
    <div className="flex gap-x-10">
      {count}
      <input value={value} onChange={(e) => setValue(Number(e.target.value))} />
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(value))}>
        incrementByAmount
      </button>
    </div>
  );
}
