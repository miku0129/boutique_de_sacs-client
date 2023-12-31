import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CustomBtn } from "../../utilities/components.styles";

import "./contact.styles.scss";

type ContactPropsType = {
  item?: Item;
};

const Contact = () => {
  const location = useLocation();
  const state = location.state as ContactPropsType;

  console.log("contact state", state);

  const navigate = useNavigate();

  return (
    <Fragment>
      <div>Contact/ {state && state.item && state.item.name}</div>
      <CustomBtn onClick={() => navigate(-1)}>Retour</CustomBtn>
    </Fragment>
  );
};

export default Contact;
