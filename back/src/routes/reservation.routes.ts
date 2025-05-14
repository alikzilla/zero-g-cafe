import { Router } from "express";
import * as ReservationController from "../controllers/reservation.controller";

const router = Router();

router.post("/", ReservationController.createReservation);
router.get("/", ReservationController.getReservations);
router.get("/:id", ReservationController.getReservation);
router.put("/:id/status", ReservationController.updateReservationStatus);
router.delete("/:id", ReservationController.deleteReservation);

export default router;
