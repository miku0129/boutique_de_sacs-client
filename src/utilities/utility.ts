import { formTypes } from "../types/types";

export const findItemById = (id: string, items: Item[]) => {
  const targetId = Number(id);
  return items.find((item: Item) => item.id === targetId);
};

export const getThisYear = (): string => {
  const fullDateString = String(new Date());
  return fullDateString.split(" ")[3];
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
    ];
    return imgs.map((img, idx) => {
      if (img.url !== "") {
        return img.id === null
          ? ({
              id: idx,
              url: img.url,
              is_main: false,
            } as FormItem_img)
          : ({
              id: img.id,
              url: img.url,
            } as FormItem_img);
      } else {
        return { id: img.id, url: "" } as FormItem_img;
      }
    });
  }
};
