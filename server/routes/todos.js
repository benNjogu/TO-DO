const express = require("express");

const { createTODO, getTODO } = require("../controllers/todos.js");

const router = express.Router();

router.post("/", createTODO);
router.get("/", getTODO);

module.exports = router;
