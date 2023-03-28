import EditToDo from "../edit-todo/edit-todo.component";

const ToDoItem = ({ todo, handleDelete }) => {
  const { t_id, description } = todo;

  return (
    <div className="row p-2">
      <div className="col-8">
        <h1 className="text-capitalize">{description}</h1>
      </div>
      <div className="col-2">
        <EditToDo todo={todo} />
      </div>
      <div className="col-2">
        <button
          className="btn btn-danger"
          onClick={(e) => handleDelete(e, t_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
