import { useEffect, useState } from "react";
import { deleteTodo, fetchTodos } from "../../../api";
import { useNavigate } from "react-router-dom";

export const List = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos().then(setTodos);
    //~> fetchTodos().then((resolve) => setTodos(resolve));
  }, []);

  const deleteTodoById = (id) => async () => setTodos(await deleteTodo(id));

  const editTodoById = (id) => () => navigate(`/form/${id}`);

  const navigateToCreatePage = () => navigate("/form");

  return (
    <>
      <button onClick={navigateToCreatePage}>create</button>
      <ul>
        {todos.map(({ id, text }) => {
          return (
            <li key={id}>
              <span>{text}</span>
              <button data-id={id} onClick={deleteTodoById(id)}>
                delete
              </button>
              <button data-id={id} onClick={editTodoById(id)}>
                edit
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
