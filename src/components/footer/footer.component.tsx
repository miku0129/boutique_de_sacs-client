import { Fragment } from "react";
import { ContentLayout } from "../../utilities/components.styles";
import { shop_name } from "../../asset/asset";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <ContentLayout>
          <span>© 2024, {shop_name}</span>
        </ContentLayout>
      </div>
    </Fragment>
  );
};

export default Footer;
