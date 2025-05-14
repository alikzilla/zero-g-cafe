import { IReview, Review } from "../models/review";

export const createReview = async (reviewData: Partial<IReview>) => {
  const review = new Review(reviewData);
  return await review.save();
};

export const getReviews = async () => {
  return await Review.find().sort({ createdAt: -1 });
};

export const getReviewById = async (id: string) => {
  return await Review.findById(id);
};

export const updateReview = async (
  id: string,
  updateData: Partial<IReview>
) => {
  return await Review.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteReview = async (id: string) => {
  return await Review.findByIdAndDelete(id);
};
