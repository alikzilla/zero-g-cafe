import mongoose, { Document, Schema } from "mongoose";

export interface ISubscriber extends Document {
  email: string;
}

const SubscriberSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ISubscriber>("Subscriber", SubscriberSchema);
