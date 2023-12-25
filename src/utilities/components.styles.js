import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderAndFooterLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const HomeLayout = styled.div`
  display: grid;
  grid-template-rows: 0.8fr auto;
`;

export const ContentLayout = styled.div`
  padding: 0px 20px 0px 20px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
export const CustomSpan = styled.span`
  font-size: large;
`;
