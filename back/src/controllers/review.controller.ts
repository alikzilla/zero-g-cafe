import { Request, Response } from "express";
import * as ReviewService from "../services/review.service";

export const createReview = async (req: Request, res: Response) => {
  try {
    const review = await ReviewService.createReview(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await ReviewService.getReviews();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReview = async (req: Request, res: Response) => {
  try {
    const review = await ReviewService.getReviewById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReview = async (req: Request, res: Response) => {
  try {
    const updatedReview = await ReviewService.updateReview(
      req.params.id,
      req.body
    );
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const deletedReview = await ReviewService.deleteReview(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
