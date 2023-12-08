const express = require("express");

const createUser = require("./users/create");
const getAllUsersList = require("./users/list");
const updateUser = require("./users/update");
const getUserById = require("./users/getById");
const deleteUser = require("./users/delete");

const router = express.Router();

router.post("/user/create", createUser);
router.get("/user/list", getAllUsersList);
router.get("/user/update:id", updateUser);
router.post("/user/fetch/:id", getUserById);
router.delete("/user/delete/:id", deleteUser);

module.exports = router;
