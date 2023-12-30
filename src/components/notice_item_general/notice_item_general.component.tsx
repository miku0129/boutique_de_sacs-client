import { Fragment } from "react";

import { client_notification_gn } from "../../asset/client_notification_general_items";

import "./notice_item_general.scss";

const NoticeItemGeneral = () => {
  return (
    <Fragment>
      <h4>{client_notification_gn.text0}</h4>
      <ol>
        <li>{client_notification_gn.text1}</li>
        <li>{client_notification_gn.text2}</li>
        <li>{client_notification_gn.text3}</li>
        <li>{client_notification_gn.text4}</li>
      </ol>
    </Fragment>
  );
};

export default NoticeItemGeneral;
