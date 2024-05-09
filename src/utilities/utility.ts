import { useContext } from "react";
import { ItemsContext } from "../context/items.context";

export const findItemById = (id: string) => {
  const items = useContext(ItemsContext)[0];
  const targetId = Number(id);
  return items.find((item: Item) => item.id === targetId);
};
