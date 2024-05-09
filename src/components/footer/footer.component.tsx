import { Fragment } from "react";
import { ContentLayout } from "../../utilities/components.styles";
import { shop_name, footer_year } from "../../asset/asset";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <ContentLayout>
          <span>© {footer_year}, {shop_name}</span>
        </ContentLayout>
      </div>
    </Fragment>
  );
};

export default Footer;
