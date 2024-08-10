import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Functional from "./components/Functional";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Class based Components</h1>
      <Functional />
    </>
  );
}

export default App;
