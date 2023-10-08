import { Router } from "express";
import * as UserController from "../controllers/user.controller";

export const userRoutes = Router();

userRoutes.route("/").post(UserController.createUser)
