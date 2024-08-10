import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Functional from "./components/Functional";
import ClassComp from "./components/ClassComp";
import Todo from "./components/Todo";
import axios from "axios";

// custom hook
function useTodos(n) {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodo(res.data.todos);
        setLoading(false);
      });
    }, 1000 * n);
  }, [n]);

  return { todo, loading };
}

function App() {
  const { todo, loading } = useTodos(5);

  return (
    <>
      {loading ? "Loading..." : todo.map((t) => <Todo key={t.id} todo={t} />)}
    </>
  );
}

export default App;
