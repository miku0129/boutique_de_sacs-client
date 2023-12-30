import styled from "styled-components";
import { ContentLayout } from "../../utilities/components.styles";

export const ItemContentLayout = styled(ContentLayout)`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding-top: 20px;
  @media (max-width: 450px) {
    flex-direction: column-reverse;
    padding-top: 10px;
`;

export const CustomItemImg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: contain;
  @media (max-width: 450px) {
    width: 350px;
    height: 300px;
    object-fit: contain;
  }
`;
