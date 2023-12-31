import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "../../context/items.context";

import Carousel from "react-bootstrap/Carousel";

import NoticeItemGeneral from "../notice_item_general/notice_item_general.component";
import NoticeRepairChair from "../notice_repair_chair/notice_repair_chair.component";

import { ItemContentLayout } from "./item.styles";
import { CustomItemImg } from "./item.styles";
import {
  ContentLayout,
  CustomBtn,
  CustomLink,
} from "../../utilities/components.styles";

import "./item.component.scss";

const Item = () => {
  const items = useContext(ItemsContext)[0];
  const params = useParams();
  let id: string | number | undefined = params.id;
  let item;
  if (id) id = Number(id);
  item = items.find((item: Item) => {
    return item.id === id;
  });

  return (
    <Fragment>
      <ItemContentLayout>
        <div>
          <Carousel>
            {item &&
              item.item_img_urls &&
              item.item_img_urls.map((item_img_url: Item_img_url) => {
                return (
                  <Carousel.Item>
                    <CustomItemImg src={item_img_url.url} />
                  </Carousel.Item>
                );
              })}
          </Carousel>
          <h3>{item && item.desc}</h3>
        </div>

        <div>
          <div>
            <h1>{item && item.name}</h1>
            <span>numéro: </span>
          </div>
          <div>
            <h3>Price: {item && item.price}euros</h3>
          </div>
          {item && (
            <CustomLink to={"/contact"} state={{ item }}>
              <CustomBtn>Achet</CustomBtn>
            </CustomLink>
          )}
        </div>
      </ItemContentLayout>
      <ContentLayout>
        <hr />
        <h2>Cher client</h2>
        {item && (item.category === "sac" || item.category === "panier") && (
          <NoticeItemGeneral />
        )}
        {item && item.category === "autre" && <NoticeRepairChair />}
      </ContentLayout>
    </Fragment>
  );
};

export default Item;
