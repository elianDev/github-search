import "./App.scss";
import { Input } from "./components/input";
import { MyProvider } from "./context/MyContext";
import "./styles/variables/index.scss";

function App() {
  return (
    <div className="container">
      <MyProvider>
        <Input />
      </MyProvider>
    </div>
  );
}
export default App;
