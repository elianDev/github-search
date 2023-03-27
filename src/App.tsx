import { useState } from "react";
import "./App.scss";
import { Card } from "./components/card";
import { Input } from "./components/input";
import { Tips } from "./components/tips";
import { MyProvider } from "./context/MyContext";
import "./styles/variables/index.scss";

function App() {
  return (
    <div className="container">
      <MyProvider>
        <Input />
        <Tips/>
        <Card />
      </MyProvider>
    </div>
  );
}

export default App;
