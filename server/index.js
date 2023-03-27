import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;
app.listen(port, () => {
  console.log("server has started on port " + port);
});
