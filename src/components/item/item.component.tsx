import { Fragment, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "../../context/items.context";

import Carousel from "react-bootstrap/Carousel";

import "./item.component.scss";

const Item = () => {
  const [index, setIndex] = useState(0);

  const items = useContext(ItemsContext)[0];
  const params = useParams();
  const id = params.id;
  let item;
  if (id) item = items[id];
  console.log("item", item);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <Fragment>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          {item &&
            item.item_img_urls &&
            item.item_img_urls.map((url: Item_img_url) => {
              return <img src={url.item_img_url} width={500} />;
            })}
          <Carousel.Caption>
            <h3>{item && item.item_name}</h3>
            <p>{item && item.item_desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default Item;
