import { Fragment } from "react";

import { NoticeContentLayout } from "./notice.styles";
import { CustomSpan } from "../../utilities/components.styles";

import { shop_concept } from "../../asset/asset";

import "./notice.styles.scss";

const Notice = () => {
  return (
    <Fragment>
      <NoticeContentLayout>
        <CustomSpan>{shop_concept}</CustomSpan>
      </NoticeContentLayout>
    </Fragment>
  );
};

export default Notice;
