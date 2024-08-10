import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Functional from "./components/Functional";
import ClassComp from "./components/ClassComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ClassComp />
      <Functional />
    </>
  );
}

export default App;
