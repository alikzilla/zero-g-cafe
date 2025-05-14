import mongoose, { Document, Schema } from "mongoose";

export interface IReservation extends Document {
  name: string;
  email: string;
  phone: string;
  date: Date;
  guests: number;
  message?: string;
  status: "pending" | "confirmed" | "cancelled";
}

const ReservationSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    guests: { type: Number, required: true },
    message: { type: String },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model<IReservation>("Reservation", ReservationSchema);
