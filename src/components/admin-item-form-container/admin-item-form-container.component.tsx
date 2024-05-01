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

const AdminItemFormContainer = ({ props }: AdminItemFormProps) => {
  return (
    <div>
      {props.formType === formTypes["REGISTER"] && (
        <AdminItemForm
          props={{
            formType: formTypes["REGISTER"],
            initFormState: initFormState,
          }}
        />
      )}
      {props.formType === formTypes["UPDATE"] && (
        <AdminItemForm
          props={{
            itemId: props.itemId,
            formType: formTypes["UPDATE"],
            initFormState: initFormState,
          }}
        />
      )}
    </div>
  );
};

export default AdminItemFormContainer;
