import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminItemForm from "../admin-item-form/admin-item-form.component";
import {
  getItemById,
  getMainImgOfItemById,
} from "../../utilities/firebase/firebase.utils";
import { formTypes } from "../../types/types";
import { formStateTemplate } from "../../asset/asset";

const AdminItemEdit = () => {
  const params = useParams();
  const [hasInitValForUpdate, setHasInitValForUpdate] = useState(false);

  useEffect(() => {
    const setInitFormState = async () => {
      const itemId = Number(params.id);
      const item = await getItemById(itemId);
      formStateTemplate!.id = item.id;
      formStateTemplate!.item_id_number = item.item_id_number;
      formStateTemplate!.name = item.name;
      formStateTemplate!.category = item.category;
      formStateTemplate!.is_available = item.is_available;
      formStateTemplate!.price = item.price;
      formStateTemplate!.desc_1 = item.desc_1;
      formStateTemplate!.desc_2 = item.desc_2;
      const item_main_img = await getMainImgOfItemById(itemId);
      formStateTemplate!.item_img_id = item_main_img.id;
      formStateTemplate!.item_img_url = item_main_img.url;
      setHasInitValForUpdate(true);
    };
    setInitFormState();
  }, [hasInitValForUpdate]);

  return (
    <div>
      {!hasInitValForUpdate && <h4>Loading...</h4> || (
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
