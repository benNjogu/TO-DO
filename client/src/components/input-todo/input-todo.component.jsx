import { useState } from "react";

const InputToDo = () => {
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-4">My To Do List</h1>
      <form className=" mt-4" onSubmit={handleSubmit}>
        <div className="row d-flex">
          <div className="col-11">
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={handleChange}
            />
          </div>
          <div className="col-1">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default InputToDo;
