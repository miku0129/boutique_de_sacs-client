import AdminItemForm from "../admin-item-form/admin-item-form.component";
import { formTypes } from "../../types/types";
import { formStateTemplate } from "../../asset/asset";

const AdminItemFormContainer = ({ props }: AdminItemFormProps) => {
  return (
    <div>
      {props.formType === formTypes["REGISTER"] && (
        <AdminItemForm
          props={{
            formType: formTypes["REGISTER"],
            formStateTemplate: formStateTemplate,
          }}
        />
      )}
      {props.formType === formTypes["UPDATE"] && (
        <AdminItemForm
          props={{
            itemId: props.itemId,
            formType: formTypes["UPDATE"],
            formStateTemplate: formStateTemplate,
          }}
        />
      )}
    </div>
  );
};

export default AdminItemFormContainer;
