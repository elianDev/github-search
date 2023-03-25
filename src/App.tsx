import { useState } from "react";
import "./App.scss";
import { Card } from "./components/card";
import { Input } from "./components/input";
// import { MyStorage } from "./context/MyContext";
import "./styles/variables/index.scss";

function App() {
  interface Prop {
    name: string;
  }

  return (
    <div className="container">
      {/* <MyStorage> */}
      <Input />
      <Card />
      {/* </MyStorage> */}
    </div>
  );
}

export default App;
