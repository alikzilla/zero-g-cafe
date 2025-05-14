import { Request, Response } from "express";
import * as SubscriberService from "../services/subscriber.service";

export const subscribe = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const subscriber = await SubscriberService.subscribe(email);
    res.status(201).json(subscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const unsubscribe = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const result = await SubscriberService.unsubscribe(email);
    if (!result) {
      return res
        .status(404)
        .json({ message: "Email not found in subscribers list" });
    }
    res.json({ message: "Unsubscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSubscribers = async (req: Request, res: Response) => {
  try {
    const subscribers = await SubscriberService.getSubscribers();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
