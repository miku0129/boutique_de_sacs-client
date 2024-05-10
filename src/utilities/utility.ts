export const findItemById = (id: string, items: Item[]) => {
  const targetId = Number(id);
  return items.find((item: Item) => item.id === targetId);
};

export const findMainImgOfItemById = (id: string, items: Item[]) => {
  const targetId = Number(id);
  const targetItem = items.find((item: Item) => item.id === targetId);
  if (targetItem && targetItem.item_imgs) {
    return targetItem.item_imgs.find((img: Item_img) => img.is_main);
  }
};

export const getThisYear = (): string => {
  const fullDateString = String(new Date());
  return fullDateString.split(" ")[3];
};
