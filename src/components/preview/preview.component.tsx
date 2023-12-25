import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import { ItemsContext } from "../../context/items.context";

import { useWindowSize } from "../../utilities/useWindowSize";
import { ContentLayout } from "../../utilities/components.styles";
import { CustomImageListItem } from "./preview.styles";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";

import "./preview.styles.scss";

const Preview = () => {
  const [width, height] = useWindowSize();

  const items = useContext(ItemsContext)[0];

  const imageItem = () => {
    return items.map((item: Item) => {
      console.log("item id", item.id);
      return (
        <Link to={`item/${item.id}`}>
          <CustomImageListItem key={item.id}>
            <img
              srcSet={`${
                item.item_img_urls && item.item_img_urls[0].url
              }?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${
                item.item_img_urls && item.item_img_urls[0].url
              }?w=248&fit=crop&auto=format`}
              alt={item.name}
              loading="lazy"
            />
          </CustomImageListItem>
        </Link>
      );
    });
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
