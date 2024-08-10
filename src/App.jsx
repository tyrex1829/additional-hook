import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Functional from "./components/Functional";
import ClassComp from "./components/ClassComp";

function App() {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 10000);
  }, []);

  return (
    <>
      {render ? <ClassComp /> : <div></div>}

      {/* {render ? <Functional /> : <div></div>} */}
    </>
  );
}

export default App;
