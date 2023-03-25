import { useState } from "react";
import "./App.scss";
import { Card } from "./components/card";
import { Input } from "./components/input";
import { MyProvider } from "./context/MyContext";
import "./styles/variables/index.scss";

function App() {
  return (
    <div className="container">
      <MyProvider>
        <Input />
        <Card />
      </MyProvider>
    </div>
  );
}

export default App;
