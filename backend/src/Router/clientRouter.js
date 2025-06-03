import express from "express";
import * as controller from "../controller/clientController.js";

const router = express.Router();

router.get("/clients", controller.get);
router.post("/clients", controller.post);
router.put("/clients/:id", controller.update);
router.delete("/clients/:id", controller.del);
export default router;
