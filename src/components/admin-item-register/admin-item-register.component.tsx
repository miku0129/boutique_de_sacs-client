import AdminItemForm from "../admin-item-form/admin-item-form.component";
import { formTypes } from "../../types/types";

// import "./admin-product-register.styles.scss";

const initFormState = {
  name: "",
  price: 0,
  desc_1: "",
  desc_2: "",
  is_available: false,
  item_img_urls: [],
  category: undefined
};

const AdminItemRegister = () => {
  return (
    <div>
      <AdminItemForm
        props={{
          formType: formTypes["REGISTER"],
          initFormState: initFormState,
          id: undefined
        }}
      />
    </div>
  );
};

export default AdminItemRegister;
