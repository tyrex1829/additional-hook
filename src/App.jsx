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

// function useInterval(fn, timeout) {
//   useEffect(() => {
//     const value = setInterval(() => {
//       fn();
//     }, timeout);
//     return () => {
//       clearInterval(value);
//     };
//   }, [timeout]);
// }

function useDebounce(v, t) {
  const [debouncedValue, setDebouncedValue] = useState(v);

  useEffect(() => {
    const value = setTimeout(() => {
      setDebouncedValue(v);
    }, t);
    return () => {
      clearTimeout(value);
    };
  }, [v, t]);

  return debouncedValue;
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <>
      Debounced value is {debouncedValue}
      <input
        type="text"
        value={inputValue}
        placeholder="Search..."
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </>
  );
}

export default App;
