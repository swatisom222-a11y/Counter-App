import React from "react";
import Counter from "./components/Counter";
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div>
        <h1>Counter App</h1>
        <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
