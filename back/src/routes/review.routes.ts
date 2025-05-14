import { Router } from "express";
import * as ReviewController from "../controllers/review.controller";

const router = Router();

router.post("/", ReviewController.createReview);
router.get("/", ReviewController.getReviews);
router.get("/:id", ReviewController.getReview);
router.put("/:id", ReviewController.updateReview);
router.delete("/:id", ReviewController.deleteReview);

export default router;
