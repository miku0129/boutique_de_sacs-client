type Sacs = "sacs";
type Vannerie = "vannerie";
type Other = "autre";

type Category = Sacs | Vannerie | Other;

interface Item_img {
  id: number;
  is_main: boolean;
  url: string;
}
interface FormItem_img extends Item_img {
  id?: number;
  is_main?: boolean;
}
interface FormItem_img_of_getTailEnd extends Item_img {
  id: number;
  url: string;
}


interface Item {
  id: number;
  item_id_number: string;
  name: string;
  category: Category;
  is_available: boolean;
  price: number;
  desc_1?: string;
  desc_2?: string;
  item_imgs?: Item_img[];
}
interface FormItem extends Item {
  id?: number;
  category: Category | undefined;
  is_available: boolean | undefined;
}

interface FormStateTemplate {
  id: number | null;
  item_id_number: string;
  name: string;
  category: Category | undefined;
  is_available: boolean | undefined;
  price?: number;
  desc_1?: string;
  desc_2?: string;
  item_img_main_id: number | null;
  item_img_main_url: string;
  item_img_sub1_id?: number | null;
  item_img_sub1_url?: string;
  item_img_sub2_id?: number | null;
  item_img_sub2_url?: string;
}

interface AdminItemFormProps {
  props: {
    formType: string;
    formStateTemplate?: FormStateTemplate;
  };
}
