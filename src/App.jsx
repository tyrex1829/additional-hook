import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Functional from "./components/Functional";
import ClassComp from "./components/ClassComp";
import Todo from "./components/Todo";
import axios from "axios";

// custom hook
function useTodos() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodo(res.data.todos);
    });
  }, []);

  return todo;
}

function App() {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(true);
  const todo = useTodos();

  return (
    <>
      {todo.map((t) => (
        <Todo key={t.id} todo={t} />
      ))}
    </>
  );
}

export default App;
