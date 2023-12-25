import { Fragment, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "../../context/items.context";

import Carousel from "react-bootstrap/Carousel";

import { ItemContentLayout } from "./item.styles";
import { CustomItemImg } from "./item.styles";

import "./item.component.scss";

const Item = () => {
  const [index, setIndex] = useState(0);

  const items = useContext(ItemsContext)[0];
  const params = useParams();
  let id: string | number | undefined = params.id;
  let item;
  if (id) id = Number(id);
  item = items.find((item: Item) => {
    return item.id === id;
  });

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <Fragment>
      <ItemContentLayout>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            {item &&
              item.item_img_urls &&
              item.item_img_urls.map((item_img_url: Item_img_url) => {
                return <CustomItemImg src={item_img_url.url} />;
              })}
          </Carousel.Item>
        </Carousel>
        <div>
          <div>
            <h1>{item.name}</h1>
          </div>
          <div>
            <h3>{item.desc}</h3>
          </div>
          <div>
            <h3>Price: {item.price}euros</h3>
          </div>
          <div>
            <span>url-to-sumup</span>
          </div>
        </div>
      </ItemContentLayout>
    </Fragment>
  );
};

export default Item;
