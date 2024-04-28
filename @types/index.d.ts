type Sacs = "sacs";
type Vannerie = "vannerie";
type Other = "autre";
type Init = "";

type Category = Sacs | Vannerie | Other | undefined;

type Item_img_url = {
  id: number;
  is_main: boolean;
  url: string;
};

type Item = {
  id: string;
  item_id_number: string;
  name: string;
  desc_1?: string;
  desc_2?: string;
  category: Category;
  price: number | string;
  is_available: boolean;
  item_img_urls?: Item_img_url[];
};

type InitFormState = {
  item_id_number?: string;
  name: string;
  desc_1?: string;
  desc_2?: string;
  category: Category;
  price: number | string;
  is_available: boolean;
  item_img_urls?: Item_img_url[];
};

type AdminItemFormProps = {
  formType: string;
  initFormState: InitFormState;
  id?: number;
};
