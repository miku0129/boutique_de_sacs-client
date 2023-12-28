import { Fragment } from "react";
import { ContentLayout } from "../../utilities/components.styles";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <ContentLayout>
          <span>Footer</span>
        </ContentLayout>
      </div>
    </Fragment>
  );
};

export default Footer;
