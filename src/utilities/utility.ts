import { useContext } from "react";
import { ItemsContext } from "../context/items.context";

export const findItemById = (id: string) => {
  const items = useContext(ItemsContext)[0];
  const targetId = Number(id);
  return items.find((item: Item) => item.id === targetId);
};

export const findMainImgOfItemById = (id: string) => {
  const items = useContext(ItemsContext)[0];
  const targetId = Number(id);
  return items
    .find((item: Item) => item.id === targetId)!
    .item_img_urls.find((img: Item_img_url) => img.is_main);
};

export const getThisYear = (): string => {
    const fullDateString = String(new Date());
    return fullDateString.split(" ")[3];
  };
  
