import { IReservation, Reservation } from "../models/reservation";

export const createReservation = async (
  reservationData: Partial<IReservation>
) => {
  const reservation = new Reservation(reservationData);
  return await reservation.save();
};

export const getReservations = async () => {
  return await Reservation.find().sort({ date: 1 });
};

export const getReservationById = async (id: string) => {
  return await Reservation.findById(id);
};

export const updateReservationStatus = async (
  id: string,
  status: "pending" | "confirmed" | "cancelled"
) => {
  return await Reservation.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteReservation = async (id: string) => {
  return await Reservation.findByIdAndDelete(id);
};
