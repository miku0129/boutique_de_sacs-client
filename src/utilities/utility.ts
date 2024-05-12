import { formTypes } from "../types/types";

export const findItemById = (id: string, items: Item[]) => {
  const targetId = Number(id);
  return items.find((item: Item) => item.id === targetId);
};

export const getThisYear = (): string => {
  const fullDateString = String(new Date());
  return fullDateString.split(" ")[3];
};

//FireStoreにおいてデータは必ずしも追加順に格納されないため
//最後尾のIDを取得するためにソートする必要がある。
export const getTailendId = <T extends Item[] | FormItem_img_of_getTailEnd[]>(
  obj: T
) => {
  const array_of_id_of_items = obj.map((obj) => obj.id);
  const sorted_array_of_id_of_items = array_of_id_of_items.sort(
    (a, b) => a - b
  );
  console.log("sorted", sorted_array_of_id_of_items);
  const id_for_the_new_item =
    sorted_array_of_id_of_items[sorted_array_of_id_of_items.length - 1] + 1;

  return id_for_the_new_item;
};

export const setItemImgs = (formData: FormStateTemplate, formType: string) => {
  if (formType === formTypes["REGISTER"]) {
    let urls = [
      formData.item_img_main_url,
      formData.item_img_sub1_url,
      formData.item_img_sub2_url,
    ];
    return urls
      .filter((url) => url && url.length > 0)
      .map((url, idx) => {
        return {
          id: idx,
          is_main: idx === 0 ? true : false,
          url: url,
        } as FormItem_img;
      });
  } else if (formType === formTypes["UPDATE"]) {
    let imgs = [
      { id: formData.item_img_main_id, url: formData.item_img_main_url },
      { id: formData.item_img_sub1_id, url: formData.item_img_sub1_url },
      { id: formData.item_img_sub2_id, url: formData.item_img_sub2_url },
    ] as FormItem_img_of_getTailEnd[];
    return imgs.map((img) => {
      if (img.url !== "") {
        if (img.id === null) {
          const id = getTailendId(imgs);
          return {
            id: id,
            url: img.url,
            is_main: false,
          } as FormItem_img;
        } else {
          return {
            id: img.id,
            url: img.url,
          } as FormItem_img;
        }
      } else {
        return { id: img.id, url: "" } as FormItem_img;
      }
    });
  }
};
