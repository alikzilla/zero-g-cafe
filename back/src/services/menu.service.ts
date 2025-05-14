import { IMenuItem, MenuItem } from "../models/menu-item";

export const getMenuItems = async (category?: string) => {
  if (category) {
    return await MenuItem.find({ category });
  }
  return await MenuItem.find();
};

export const getMenuItemById = async (id: string) => {
  return await MenuItem.findById(id);
};

export const createMenuItem = async (menuItemData: Partial<IMenuItem>) => {
  const menuItem = new MenuItem(menuItemData);
  return await menuItem.save();
};

export const updateMenuItem = async (
  id: string,
  updateData: Partial<IMenuItem>
) => {
  return await MenuItem.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteMenuItem = async (id: string) => {
  return await MenuItem.findByIdAndDelete(id);
};
