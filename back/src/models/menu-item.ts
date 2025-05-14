import mongoose, { Document, Schema } from "mongoose";

export interface IMenuItem extends Document {
  title: string;
  price: number;
  description: string;
  image: string;
  category: "starters" | "mains" | "drinks" | "desserts";
  tags: string[];
}

const MenuItemSchema: Schema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ["starters", "mains", "drinks", "desserts"],
  },
  tags: { type: [String], default: [] },
});

export default mongoose.model<IMenuItem>("MenuItem", MenuItemSchema);
