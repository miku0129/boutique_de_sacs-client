import { useParams } from "react-router-dom";
import AdminItemFormContainer from "../admin-item-form-container/admin-item-form-container.component";
import { formTypes } from "../../types/types";

const AdminItemEdit = () => {
  const params = useParams();
  return (
    <div>
      <AdminItemFormContainer props={{ formType: formTypes["UPDATE"], itemId: Number(params.id)}} />;
    </div>
  );
};

export default AdminItemEdit;
