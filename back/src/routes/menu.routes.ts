import { Router } from "express";
import * as MenuController from "../controllers/menu.controller";

const router = Router();

router.get("/", MenuController.getMenuItems);
router.post("/", MenuController.createMenuItem);
router.get("/:id", MenuController.getMenuItem);
router.put("/:id", MenuController.updateMenuItem);
router.delete("/:id", MenuController.deleteMenuItem);

export default router;
