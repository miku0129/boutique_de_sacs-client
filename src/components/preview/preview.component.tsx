import { useEffect, useState, Fragment } from "react";
import axios from "axios";

import { useWindowSize } from "../../utilities/useWindowSize";
import { ContentLayout } from "../../utilities/components.styles";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import "./preview.styles.scss";

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

  const [width, height] = useWindowSize();
  console.log(width);

  useEffect(() => {
    const getItems = async () => {
      const items = await axios.get(
        "https://boutique-de-sacs-winter-night-1102.fly.dev/items"
      );
      setItems(items.data);
    };
    getItems();
  }, []);

  const imageItem = () => {
    return items.map((item) => (
      <ImageListItem key={item.id}>
        <img
          srcSet={`${item.item_img_urls[0].item_img_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.item_img_urls[0].item_img_url}?w=248&fit=crop&auto=format`}
          alt={item.item_name}
          loading="lazy"
        />
      </ImageListItem>
    ));
  };

  const handleStyleOfImageList = () => {
    if (width < 450) {
      return (
        <>
          <ImageList variant="masonry" style={{ columnCount: "2" }} gap={8}>
            {imageItem()}
          </ImageList>
        </>
      );
    } else {
      return (
        <>
          <ImageList variant="masonry" style={{ columnCount: "3" }} gap={8}>
            {imageItem()}
          </ImageList>
        </>
      );
    }
  };

  return (
    <Fragment>
      <ContentLayout>
        <Box sx={{ width: "auto", height: 450, overflowY: "scroll" }}>
          {handleStyleOfImageList()}
        </Box>
      </ContentLayout>
    </Fragment>
  );
};

export default Preview;
