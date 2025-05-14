import { Request, Response } from "express";
import * as MenuService from "../services/menu.service";

export const getMenuItems = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const menuItems = await MenuService.getMenuItems(category as string);
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMenuItem = async (req: Request, res: Response) => {
  try {
    const menuItem = await MenuService.getMenuItemById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMenuItem = async (req: Request, res: Response) => {
  try {
    const menuItem = await MenuService.createMenuItem(req.body);
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMenuItem = async (req: Request, res: Response) => {
  try {
    const updatedItem = await MenuService.updateMenuItem(
      req.params.id,
      req.body
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMenuItem = async (req: Request, res: Response) => {
  try {
    const deletedItem = await MenuService.deleteMenuItem(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
