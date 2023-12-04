const express = require("express");

const router = express.Router();

const usersController = require("../controllers/usersController");

router.get("/api/users", usersController.getUsers);
router.get("/api/users/:id", usersController.getUsersById);

module.exports = router;
