import { Fragment } from "react";

import {
  about_text_1,
  about_text_2,
  about_text_3,
  about_text_4,
  about_text_5,
  about_text_6,
} from "../../asset/asset";

import { ContentLayout } from "../../utilities/components.styles";
import { ReactComponent as ShopLogo } from "./../../asset/logo.svg";
import "./about.style.scss";

const About = () => {
  return (
    <Fragment>
      <ContentLayout className="about-content-layout">
        <div className="about-img-container">
          <ShopLogo style={{ height: "300px" }} />
        </div>
        <div className="about-text-container">
          <p>{about_text_1}</p>
          <p>{about_text_2}</p>
          <p>{about_text_3}</p>
          <p>{about_text_4}</p>
          <div className="about-text-address">
            <span>{about_text_5}</span>
            <br />
            <span>{about_text_6}</span>
          </div>
        </div>
      </ContentLayout>
    </Fragment>
  );
};

export default About;
