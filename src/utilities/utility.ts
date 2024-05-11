export const findItemById = (id: string, items: Item[]) => {
  const targetId = Number(id);
  return items.find((item: Item) => item.id === targetId);
};

export const getThisYear = (): string => {
  const fullDateString = String(new Date());
  return fullDateString.split(" ")[3];
};

export const makeItemImgsArrayForRegister = (
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

export const makeItemImgsArrayForUpdate = (
  mainId: number | null,
  mainUrl: string,
  sub1Id: number | null | undefined,
  sub1Url: string | undefined,
  sub2Id: number | null | undefined,
  sub2Url: string | undefined
) => {
  let imgs = [
    { id: mainId, url: mainUrl },
    { id: sub1Id, url: sub1Url },
    { id: sub2Id, url: sub2Url },
  ];
  return imgs
    .filter((img) => typeof img.url !== "undefined")
    .map((img, idx) => {
      if (img.id === null) {
        return {
          id: idx,
          url: img.url,
          is_main: false,
        } as FormItem_img;
      } else {
        return {
          id: img.url,
          url: img.url,
        } as FormItem_img;
      }
    });
};
