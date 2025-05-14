import { Router } from "express";
import * as SubscriberController from "../controllers/subscriber.controller";

const router = Router();

router.post("/subscribe", SubscriberController.subscribe);
router.post("/unsubscribe", SubscriberController.unsubscribe);
router.get("/", SubscriberController.getSubscribers);

export default router;
