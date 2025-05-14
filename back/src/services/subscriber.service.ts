import { Subscriber } from "../models/subscriber";

export const subscribe = async (email: string) => {
  const existingSubscriber = await Subscriber.findOne({ email });
  if (existingSubscriber) {
    throw new Error("Email already subscribed");
  }

  const subscriber = new Subscriber({ email });
  return await subscriber.save();
};

export const unsubscribe = async (email: string) => {
  return await Subscriber.findOneAndDelete({ email });
};

export const getSubscribers = async () => {
  return await Subscriber.find();
};
