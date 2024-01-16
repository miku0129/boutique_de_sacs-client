import { Fragment } from "react";

import {
  about_text_1,
  about_text_2,
  about_text_3,
  about_text_4,
} from "../../asset/asset";

import { ContentLayout } from "../../utilities/components.styles";
import "./about.style.scss";

const About = () => {
  return (
    <Fragment>
      <ContentLayout className="about-content-layout">
        <div className="about-img-container">
          <img
            className="about-img"
            src="https://images.unsplash.com/photo-1501644898242-cfea317d7faf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="bio"
          />
        </div>
        <div className="about-text-container">
          <p>{about_text_1}</p>
          <p>{about_text_2}</p>
          <p>{about_text_3}</p>
          <p>{about_text_4}</p>
        </div>
      </ContentLayout>
    </Fragment>
  );
};

export default About;
