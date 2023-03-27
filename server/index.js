const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todos.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);

const port = 5000;
app.listen(port, () => {
  console.log("server has started on port " + port);
});
