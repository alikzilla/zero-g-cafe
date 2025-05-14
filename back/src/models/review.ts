import mongoose, { Document, Schema } from "mongoose";

export interface IReview extends Document {
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const ReviewSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String, required: true },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IReview>("Review", ReviewSchema);
