const express = require("express");

const router = express.Router();

const usersController = require("../controllers/usersController");

// router get

router.get("/api/users", usersController.getUsers);
router.get("/api/users/:id", usersController.getUsersById);

// router post

router.post("/api/users", usersController.postUsers);

// router put

router.put("/api/users/:id", usersController.updateUsers);

module.exports = router;
