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

const AdminItemFormContainer = (props: { formtype: string }) => {
  return (
    <div>
      {props.formtype === formTypes["REGISTER"] && (
        <AdminItemForm
          props={{
            formType: formTypes["REGISTER"],
            initFormState: initFormState,
          }}
        />
      )}
      {props.formtype === formTypes["UPDATE"] && (
        <AdminItemForm
          props={{
            id: undefined,
            formType: formTypes["UPDATE"],
            initFormState: initFormState,
          }}
        />
      )}
    </div>
  );
};

export default AdminItemFormContainer;
