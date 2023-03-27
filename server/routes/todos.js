const express = require("express");

const {
  createTODO,
  getTODO,
  getTODOById,
  updateTODO,
  deleteTODO,
} = require("../controllers/todos.js");

const router = express.Router();

router.post("/", createTODO);
router.get("/", getTODO);
router.get("/:id", getTODOById);
router.put("/:id", updateTODO);
router.delete("/:id", deleteTODO);

module.exports = router;
