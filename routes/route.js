import express from "express";
import { fetchData, createUser, login } from "../controllers/controller.js";

const router = express.Router();

router.get("/data", fetchData);
router.post("/register", createUser);
router.post("/login", login);

export default router;
