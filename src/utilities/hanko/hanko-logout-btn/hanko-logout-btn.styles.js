import styled from "styled-components";
import { CustomBtn } from "../../components.styles";

export const CustomLogoutBtn = styled(CustomBtn)`
  background-color: white;
  color: darkgray;
  border: 1px solid darkgray;
  &:hover {
    background-color: darkgray;
    color: white;
    border: none;
  }
`;
