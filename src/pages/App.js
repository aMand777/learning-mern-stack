import React from "react";
import "./App.css";
import { Routes } from "../config";
import store from "../config/redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />;
    </Provider>
  );
};

export default App;
