import React from "react";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Dashboard />
    </div>
  );
};

export default App;
