import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "../../context/items.context";

import Carousel from "react-bootstrap/Carousel";

import NoticeItemGeneral from "../notice_item_general/notice_item_general.component";
import NoticeRepairChair from "../notice_repair_chair/notice_repair_chair.component";
import { price_or_notification_text } from "../../asset/asset";

import { ItemContentLayout } from "./item.styles";
import { CustomItemImg } from "./item.styles";
import {
  ContentLayout,
  CustomBtn,
  CustomLink,
} from "../../utilities/components.styles";
import { item_purchase_button_text } from "../../asset/asset";

import "./item.component.scss";

const Item = () => {
  const items = useContext(ItemsContext)[0];
  const params = useParams();
  let id: string | number | undefined = params.id;
  let item: Item | undefined;
  if (id) id = Number(id);
  item = items.find((item: Item) => {
    return item.id === id;
  });

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

  return (
    item && (
      <div key={item.id}>
        <ItemContentLayout>
          <div>
            <Carousel>
              {item.item_img_urls &&
                item.item_img_urls.map((item_img_url: Item_img_url) => {
                  return (
                    <Carousel.Item key={item_img_url.id + 1}>
                      <CustomItemImg src={item_img_url.url} />
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
