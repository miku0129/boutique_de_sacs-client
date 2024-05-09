import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "../../context/items.context";
import AdminItemForm from "../admin-item-form/admin-item-form.component";
import { formTypes } from "../../types/types";
import { findItemById, findMainImgOfItemById } from "../../utilities/utility";
import { formStateTemplate, msg_loading } from "../../asset/asset";

const AdminItemEdit = () => {
  const params = useParams();
  const items = useContext(ItemsContext)[0];
  const [hasInitValForUpdate, setHasInitValForUpdate] = useState(false);

  useEffect(() => {
    const setInitFormState = async () => {
      const item = findItemById(params.id!, items);
      if (item) {
        formStateTemplate!.id = item.id;
        formStateTemplate!.item_id_number = item.item_id_number;
        formStateTemplate!.name = item.name;
        formStateTemplate!.category = item.category;
        formStateTemplate!.is_available = item.is_available;
        formStateTemplate!.price = item.price;
        formStateTemplate!.desc_1 = item.desc_1;
        formStateTemplate!.desc_2 = item.desc_2;
        const item_main_img = findMainImgOfItemById(params.id!, items);
        if (item_main_img) {
          formStateTemplate!.item_img_id = item_main_img.id;
          formStateTemplate!.item_img_url = item_main_img.url;
        }
        setHasInitValForUpdate(true);
      }
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
