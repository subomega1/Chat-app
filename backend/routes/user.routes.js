import express from "express";
import protectRoute from "../midleware/protectRoute.midleware.js"
import { getUsersForSlideBar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute,getUsersForSlideBar);

export default router;


