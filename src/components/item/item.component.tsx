import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "../../context/items.context";

import NoticeItemGeneral from "../notice_item_general/notice_item_general.component";
import NoticeRepairChair from "../notice_repair_chair/notice_repair_chair.component";

import { findItemById } from "../../utilities/utility";
import {
  ContentLayout,
  CustomBtn,
  CustomLink,
} from "../../utilities/components.styles";
import Carousel from "react-bootstrap/Carousel";
import {
  item_purchase_button_text,
  price_or_notification_text,
} from "../../asset/asset";

import { ItemContentLayout, CustomItemImg } from "./item.styles";
import "./item.component.scss";

const Item = () => {
  const params = useParams();
  const id = params.id;
  const items = useContext(ItemsContext)[0];
  const item: Item | undefined =
    id !== undefined ? findItemById(id, items) : undefined;

  let price_or_notification = "";
  if (item && item.is_available && typeof item.price === "number") {
    price_or_notification = "Prix: " + item.price + " euros";
  } else {
    price_or_notification = price_or_notification_text;
  }

  const makeNewline = (desc: string) => {
    const strArray = desc.split(".");
    return strArray
      .filter((str) => str !== "")
      .map((str, idx) => {
        return <h5 key={idx}>{str.trim()}.</h5>;
      });
  };
  console.log("id", id)

  console.log("item", item)

  return (
    item && (
      <div key={item.id}>
        <ItemContentLayout>
          <div>
            <Carousel>
              {item.item_imgs &&
                item.item_imgs.map((item_img: Item_img) => {
                  return (
                    <Carousel.Item key={item_img.id + 1}>
                      <CustomItemImg src={item_img.url} />
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </div>

          <div>
            <div>
              <h1>{item.name}</h1>
              <p>numéro: {item.item_id_number}</p>
            </div>
            <div>
              <h3>{price_or_notification}</h3>
              <hr />
              <div>{item.desc_1 && makeNewline(item.desc_1)}</div>
              <hr />
              <div>{item.desc_2 && makeNewline(item.desc_2)}</div>
            </div>
            {
              <CustomLink to={"/contact"} state={{ item }}>
                <CustomBtn>{item_purchase_button_text}</CustomBtn>
              </CustomLink>
            }
          </div>
        </ItemContentLayout>
        <ContentLayout>
          <hr />
          <h2>Cher client</h2>
          {(item.category === "sacs" || item.category === "vannerie") && (
            <NoticeItemGeneral />
          )}
          {item.category === "autre" && <NoticeRepairChair />}
        </ContentLayout>
      </div>
    )
  );
};

export default Item;
