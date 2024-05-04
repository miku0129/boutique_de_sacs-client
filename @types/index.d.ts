type Sacs = "sacs";
type Vannerie = "vannerie";
type Other = "autre";

type Category = Sacs | Vannerie | Other;

type Item_img_url = {
  id: number;
  is_main: boolean;
  url: string;
};

type Item = {
  id: string;
  item_id_number: string;
  name: string;
  category: Category;
  is_available: boolean;
  price: number | string;
  desc_1?: string;
  desc_2?: string;
  item_img_urls?: Item_img_url[];
};

type FormStateTemplate = {
  item_id_number?: string;
  name: string;
  category: Category | undefined;
  is_available: boolean | undefined;
  price: number | undefined;
  desc_1?: string;
  desc_2?: string;
  item_img_url: string;
};

type AdminItemFormProps = {
  props: {
    itemId?: number;
    formType: string;
    formStateTemplate?: FormStateTemplate;
  };
};
