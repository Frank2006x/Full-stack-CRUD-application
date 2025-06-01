import express from "express";
import * as controller from "../controller/clientController.js";

const router = express.Router();

router.get("/clients", controller.get);
router.post("/clients", controller.post);
export default router;
