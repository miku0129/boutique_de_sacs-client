import { Fragment } from "react";

import { NoticeContentLayout } from "./notice.styles";
import { CustomSpan } from "../../utilities/components.styles";

import { shop_concept_1 } from "../../asset/asset";
import { shop_concept_2 } from "../../asset/asset";

import "./notice.styles.scss";

const Notice = () => {
  return (
    <Fragment>
      <NoticeContentLayout className="notice-content-layout">
        <br />
        <CustomSpan>{shop_concept_1}</CustomSpan>
        <br />
        <CustomSpan>{shop_concept_2}</CustomSpan>
      </NoticeContentLayout>
    </Fragment>
  );
};

export default Notice;
