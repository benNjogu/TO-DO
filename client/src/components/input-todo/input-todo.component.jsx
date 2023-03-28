import { useState } from "react";

const InputToDo = () => {
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDescription("");

    try {
      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error.message);
    }

    window.location = "/";
  };

  return (
    <>
      <h1 className="text-center mt-4 font-weight-bold">MY TO-DO LIST.</h1>
      <form className=" mt-4" onSubmit={handleSubmit}>
        <div className="row d-flex">
          <div className="col-11">
            <input
              type="text"
              className="form-control"
              placeholder="Type todo"
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
