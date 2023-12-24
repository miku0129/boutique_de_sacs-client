import styled from "styled-components";

import ImageListItem from "@mui/material/ImageListItem";

export const CustomImageListItem = styled(ImageListItem)`
  & :hover {
    opacity: 0.5;
  }
`;
