import express from "express";
import {sendMessage} from "../controllers/message.controller.js"
import protectRoute from "../midleware/protectRoute.midleware.js"
import { getMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/:id",protectRoute, getMessage)
router.post("/send/:id",protectRoute, sendMessage)


export default router