import AdminItemForm from "../admin-item-form/admin-item-form.component";
import { formTypes } from "../../types/types";

// import "./admin-product-register.styles.scss";

const initFormState = {
  name: "",
  category: undefined,
  is_available: undefined,
  price: undefined,
  desc_1: "",
  desc_2: "",
  item_img_url: "",
};

const AdminItemRegister = () => {
  return (
    <div>
      <AdminItemForm
        props={{
          id: undefined,
          formType: formTypes["REGISTER"],
          initFormState: initFormState,
        }}
      />
    </div>
  );
};

export default AdminItemRegister;
