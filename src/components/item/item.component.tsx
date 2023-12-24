import { useContext } from "react";
import { ItemsContext } from "../../context/items.context";

import "./item.component.scss";

const Item = () => {
  const items = useContext(ItemsContext)[0];
  console.log("items", items);

  return <div className="item">item</div>;
};

export default Item;
