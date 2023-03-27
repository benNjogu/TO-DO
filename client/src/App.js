import { Fragment } from "react";

import InputToDo from "./components/input-todo/input-todo.component";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputToDo />
      </div>
    </Fragment>
  );
}

export default App;
