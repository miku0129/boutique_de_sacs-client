import { Fragment, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { ItemsContext } from "../../context/items.context";

import Notice from "../notice/notice.component";

import { useWindowSize } from "../../utilities/useWindowSize";
import { ContentLayout } from "../../utilities/components.styles";
import { CustomImageListItem } from "./preview.styles";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";

import "./preview.styles.scss";

type PreviewPropsType = {
  previewtype?: Sac | Panier | Other;
};

const Preview = () => {
  const [width, height] = useWindowSize();

  const location = useLocation();
  const state = location.state as PreviewPropsType;

  let items = useContext(ItemsContext)[0];

  if (state !== null) {
    if (state.previewtype === "sac") {
      items = items.filter((item: Item) => item.category === "sac");
    } else if (state.previewtype === "panier") {
      items = items.filter((item: Item) => item.category === "panier");
    } else {
      items = items.filter((item: Item) => item.category === "autre");
    }
  }

  const imageItem = () => {
    return items.map((item: Item) => {
      return (
        <Link to={`item/${item.id}`}>
          <CustomImageListItem key={item.id}>
            {item.item_img_urls &&
              item.item_img_urls
                .filter((item_img_url: Item_img_url) => item_img_url.is_main)
                .map((item_img_url: Item_img_url) => (
                  <img
                    srcSet={`${item_img_url.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item_img_url.url}?w=248&fit=crop&auto=format`}
                    alt={item.name}
                    loading="lazy"
                  />
                ))}
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
      <Notice />
        <Box sx={{ width: "auto", height: 450, overflowY: "scroll" }}>
          {handleStyleOfImageList()}
        </Box>
      </ContentLayout>
    </Fragment>
  );
};

export default Preview;
