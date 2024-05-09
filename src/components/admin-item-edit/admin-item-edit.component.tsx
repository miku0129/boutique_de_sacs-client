import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminItemForm from "../admin-item-form/admin-item-form.component";
import { formTypes } from "../../types/types";
import { findItemById, findMainImgOfItemById } from "../../utilities/utility";
import { formStateTemplate, msg_loading } from "../../asset/asset";

const AdminItemEdit = () => {
  const params = useParams();
  const [hasInitValForUpdate, setHasInitValForUpdate] = useState(false);

  useEffect(() => {
    const setInitFormState = async () => {
      const item = findItemById(params.id!);
      formStateTemplate!.id = item.id;
      formStateTemplate!.item_id_number = item.item_id_number;
      formStateTemplate!.name = item.name;
      formStateTemplate!.category = item.category;
      formStateTemplate!.is_available = item.is_available;
      formStateTemplate!.price = item.price;
      formStateTemplate!.desc_1 = item.desc_1;
      formStateTemplate!.desc_2 = item.desc_2;
      const item_main_img = findMainImgOfItemById(params.id!);
      formStateTemplate!.item_img_id = item_main_img.id;
      formStateTemplate!.item_img_url = item_main_img.url;
      setHasInitValForUpdate(true);
    };
    setInitFormState();
  }, [hasInitValForUpdate]);

  return (
    <div>
      {(!hasInitValForUpdate && <h4>{msg_loading}</h4>) || (
        <AdminItemForm
          props={{
            formType: formTypes["UPDATE"],
            formStateTemplate: formStateTemplate,
          }}
        />
      )}
    </div>
  );
};

export default AdminItemEdit;
