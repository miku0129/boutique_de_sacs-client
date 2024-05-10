export const findItemById = (id: string, items: Item[]) => {
  const targetId = Number(id);
  return items.find((item: Item) => item.id === targetId);
};

export const getThisYear = (): string => {
  const fullDateString = String(new Date());
  return fullDateString.split(" ")[3];
};

export const makeArrayOfItemImgs = (
  mainUrl: string,
  sub1Url: string | undefined,
  sub2Url: string | undefined
) => {
  let urls = [mainUrl, sub1Url, sub2Url];
  return urls
    .filter((url) => url!.length > 0)
    .map((url, idx) => {
      return {
        id: idx,
        is_main: idx === 0 ? true : false,
        url: url,
      } as FormItem_img;
    });
};
