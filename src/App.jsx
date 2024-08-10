import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Functional from "./components/Functional";
import ClassComp from "./components/ClassComp";
import Todo from "./components/Todo";
import axios from "axios";

// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener("online", () => {
//       setIsOnline(true);
//     });
//     window.addEventListener("offline", () => {
//       setIsOnline(false);
//     });
//   }, []);

//   return isOnline;
// }

// function useMousePointer() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     window.addEventListener("mousemove", (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     });
//     return () => {
//       window.addEventListener("mousemove", (e) => {
//         setPosition({ x: e.clientX, y: e.clientY });
//       });
//     };
//   }, []);

//   return position;
// }

function useInterval(fn, timeout) {
  useEffect(() => {
    const value = setInterval(() => {
      fn();
    }, timeout);
    return () => {
      clearInterval(value);
    };
  }, [timeout]);
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return <>Timer is at {count}</>;
}

export default App;
