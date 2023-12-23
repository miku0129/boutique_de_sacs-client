import { useEffect, useState, Fragment } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import "./preview.styles.scss"

type Item_img_url = {
  id: number;
  is_main_img: boolean;
  item_img_url: string;
};

type Item = {
  id: string;
  item_name: string;
  item_desc: string;
  item_price: number;
  item_img_urls: Item_img_url[];
};

const Preview = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const items = await axios.get(
        "https://boutique-de-sacs-winter-night-1102.fly.dev/items"
      );
      console.log("items", items.data);
      setItems(items.data);
    };
    getItems();
  }, []);
  return (
    <Fragment>
      <div className="preview">
        <Box sx={{ width: "auto", height: 450, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {items.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  srcSet={`${item.item_img_urls[0].item_img_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.item_img_urls[0].item_img_url}?w=248&fit=crop&auto=format`}
                  alt={item.item_name}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </Fragment>
  );
};

export default Preview;
