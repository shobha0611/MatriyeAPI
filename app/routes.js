import express from "express";

import createUser from "./users/create.js";
import getAllUsersList from "./users/list.js";
import updateUser from "./users/update.js";
import getUserById from "./users/getById.js";
import deleteUser from "./users/delete.js";

const router = express.Router();

router.post("/user/create", createUser);
router.post("/user/update/:id", updateUser);

router.get("/user/list", getAllUsersList);
router.get("/user/fetch/:id", getUserById);

router.delete("/user/delete/:id", deleteUser);

export default router;
