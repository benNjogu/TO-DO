import { Fragment } from "react";

import InputToDo from "./components/input-todo/input-todo.component";
import "./App.css";
import ListToDo from "./components/list-todo/list-todo.component";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputToDo />
        <ListToDo />
      </div>
    </Fragment>
  );
}

export default App;
