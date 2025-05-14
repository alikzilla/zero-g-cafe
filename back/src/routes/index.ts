import { Router } from "express";
import menuRoutes from "./menu.routes";
import reservationRoutes from "./reservation.routes";
import reviewRoutes from "./review.routes";
import subscriberRoutes from "./subscriber.routes";

const router = Router();

router.use("/menu", menuRoutes);
router.use("/reservations", reservationRoutes);
router.use("/reviews", reviewRoutes);
router.use("/subscribers", subscriberRoutes);

export default router;
