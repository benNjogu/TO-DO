import { useState } from "react";

const EditToDo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const handleEdit = (e) => {
    e.preventDefault();

    setDescription(e.target.value);
  };

  const updateData = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`http://localhost:5000/todos/${todo.t_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };

  const revertChanges = (e) => {
    e.preventDefault();
    setDescription(todo.description);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target={`#id${todo.t_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${todo.t_id}`} onClick={revertChanges}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={revertChanges}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                value={description}
                onChange={handleEdit}
                className="form-control"
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                onClick={updateData}
                className="btn btn-success"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditToDo;
