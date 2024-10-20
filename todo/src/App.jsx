import { useState } from "react";
import "./App.css";
import "./Home.css";
import Home from "./Home";
function App() {
  const [count, setCount] = useState("");
  // console.log("say please:", setCount);
  return (
    <div>
      <Home count={count} setCount={setCount} />
    </div>
  );
}

export default App;
