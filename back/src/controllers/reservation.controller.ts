import { Request, Response } from "express";
import * as ReservationService from "../services/reservation.service";

export const createReservation = async (req: Request, res: Response) => {
  try {
    const reservation = await ReservationService.createReservation(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getReservations = async (req: Request, res: Response) => {
  try {
    const reservations = await ReservationService.getReservations();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReservation = async (req: Request, res: Response) => {
  try {
    const reservation = await ReservationService.getReservationById(
      req.params.id
    );
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReservationStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const updatedReservation = await ReservationService.updateReservationStatus(
      req.params.id,
      status
    );
    if (!updatedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json(updatedReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteReservation = async (req: Request, res: Response) => {
  try {
    const deletedReservation = await ReservationService.deleteReservation(
      req.params.id
    );
    if (!deletedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
