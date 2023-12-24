type Item_img_url = {
  id: number;
  is_main_img: boolean;
  item_img_url: string;
};

type Item = {
  id: string;
  item_name: string;
  item_desc: string;
  item_price: number;
  item_img_urls: Item_img_url[];
};
