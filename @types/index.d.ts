type Sacs = "sacs";
type Vannerie = "vannerie";
type Other = "autre";

type Category = Sacs | Vannerie | Other;

interface Item_img_url {
  id: number;
  is_main: boolean;
  url: string;
}

interface Item {
  id: number;
  item_id_number: string;
  name: string;
  category: Category;
  is_available: boolean;
  price: number ;
  desc_1?: string;
  desc_2?: string;
  item_img_urls?: Item_img_url[];
}

interface FormStateTemplate {
  id: number | null;
  item_id_number: string | undefined;
  name: string;
  category: Category | undefined;
  is_available: boolean | undefined;
  price?: number;
  desc_1?: string;
  desc_2?: string;
  item_img_id: number | null;
  item_img_url: string;
}

interface AdminItemFormProps {
  props: {
    formType: string;
    formStateTemplate?: FormStateTemplate;
  };
}
