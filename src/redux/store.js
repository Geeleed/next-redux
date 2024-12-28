import { configureStore } from "@reduxjs/toolkit";
import counter from "./slice/counter";

export default function store() {
  return configureStore({
    reducer: {
      counter: counter.reducer,
    },
  });
}
