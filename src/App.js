import React, { useState } from "react";
import "./App.css";
const img = "http://unsplash.it/300/300?image=345";

function App() {
  return (
    <div className="App">
      <h2>hello</h2>
      <img src={img} alt="images" />
    </div>
  );
}

export default App;
