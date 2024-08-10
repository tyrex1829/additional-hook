import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Functional from "./components/Functional";
import ClassComp from "./components/ClassComp";
import Todo from "./components/Todo";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(true);
  const [todo, setTodo] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setRender(false);
  //   }, 10000);
  // }, []);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodo(res.data.todos);
    });
  }, []);

  return (
    <>
      {todo.map((t) => (
        <Todo key={t.id} todo={t} />
      ))}

      {/* {render ? <ClassComp /> : <div></div>} */}
      {/* {render ? <Functional /> : <div></div>} */}
    </>
  );
}

export default App;
