"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const UserRouter = (0, express_1.Router)();
UserRouter.get("", user_controller_1.getAllUsers);
UserRouter.get("/:id", user_controller_1.getUserById);
UserRouter.post("/login", user_controller_1.loginUser);
UserRouter.post("/register", user_controller_1.createUser);
UserRouter.put("/:id", user_controller_1.updateUser);
UserRouter.delete("/:id", user_controller_1.deleteUser);
exports.default = UserRouter;