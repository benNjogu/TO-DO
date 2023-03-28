import { useEffect, useState } from "react";
import EditToDo from "../edit-todo/edit-todo.component";
import ToDoItem from "../todo-item/todo-item.component";

const ListToDo = () => {
  const [todos, setToDos] = useState([]);

  useEffect(() => {
    getToDos();
  }, [setToDos]);

  const getToDos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos/");
      const jsonData = await response.json();

      setToDos(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async () => {

  };

  const handleDelete = async (e, id) => {
    e.preventDefault();

    setToDos(todos.filter((todo) => todo.t_id !== id));
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {todos !== null
        ? todos.map((todo) => (
            <ToDoItem
              key={todo.t_id}
              todo={todo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))
        : ""}
    </>
  );
};

export default ListToDo;
