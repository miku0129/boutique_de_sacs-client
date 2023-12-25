type Sac = "sac";
type Panier = "panier";
type Other = "autre";

type Category = Sac | Panier | Other;

type Item_img_url = {
  id: number;
  is_main: boolean;
  url: string;
};

type Item = {
  id: string;
  name: string;
  desc?: string;
  category: Category;
  price: number;
  payment_link: string;
  item_img_urls?: Item_img_url[];
};
