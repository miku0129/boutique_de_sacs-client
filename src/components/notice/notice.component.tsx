import { Fragment } from "react";
import { NoticeContentLayout } from "./notice.styles";

import { shop_concept } from "../../asset/asset";

import "./notice.styles.scss";

const Notice = () => {
  return (
    <Fragment>
      <NoticeContentLayout>
        <span>{shop_concept}</span>
      </NoticeContentLayout>
    </Fragment>
  );
};

export default Notice;
