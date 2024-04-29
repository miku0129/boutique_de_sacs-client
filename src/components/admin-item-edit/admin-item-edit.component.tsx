import AdminItemFormContainer from "../admin-item-form-container/admin-item-form-container.component";
import { formTypes } from "../../types/types";

const AdminItemEdit = () => {
  return (
    <div>
      <AdminItemFormContainer formtype={formTypes["UPDATE"]} />;
    </div>
  );
};

export default AdminItemEdit;
