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

interface PreviewPropsType {
  previewtype: Sacs | Vannerie | Other;
}

const Preview = () => {
  const [width, height] = useWindowSize();
  console.log("to avoid eslint issue: ", height);

  const location = useLocation();
  const state = location.state as PreviewPropsType;

  let items = useContext(ItemsContext)[0];

  if (state !== null) {
    if (state.previewtype === "sacs") {
      items = items.filter((item: Item) => item.category === "sacs");
    } else if (state.previewtype === "vannerie") {
      items = items.filter((item: Item) => item.category === "vannerie");
    } else {
      items = items.filter((item: Item) => item.category === "autre");
    }
  }

  const imageItem = () => {
    return (
      items &&
      items.map((item: Item, idx: number) => {
        return (
          <Link to={`item/${item.id}`} key={idx}>
            <CustomImageListItem key={item.id}>
              {item.item_imgs &&
                item.item_imgs
                  .filter((item_img: Item_img) => item_img.is_main)
                  .map((item_img: Item_img, idx: number) => (
                    <img
                      srcSet={`${item_img.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item_img.url}?w=248&fit=crop&auto=format`}
                      alt={item.name}
                      loading="lazy"
                      key={idx}
                    />
                  ))}
            </CustomImageListItem>
          </Link>
        );
      })
    );
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
        <Box sx={{ width: "auto", overflowY: "scroll" }}>
          {handleStyleOfImageList()}
        </Box>
      </ContentLayout>
    </Fragment>
  );
};

export default Preview;
