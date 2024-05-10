import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "../../context/items.context";
import AdminItemForm from "../admin-item-form/admin-item-form.component";
import { formTypes } from "../../types/types";
import { findItemById } from "../../utilities/utility";
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
        if (item.item_imgs) {
          const mainImg = item.item_imgs.find((item_img) => item_img.is_main);
          formStateTemplate!.item_img_main_id = mainImg!.id;
          formStateTemplate!.item_img_main_url = mainImg!.url;

          const subImgs = item.item_imgs.filter(
            (item_img) => !item_img.is_main
          );
          if (subImgs[0]) {
            formStateTemplate!.item_img_sub1_id = subImgs[0].id;
            formStateTemplate!.item_img_sub1_url = subImgs[0].url;
          }
          if (subImgs[1]) {
            formStateTemplate!.item_img_sub2_id = subImgs[1].id;
            formStateTemplate!.item_img_sub2_url = subImgs[1].url;
          }
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
