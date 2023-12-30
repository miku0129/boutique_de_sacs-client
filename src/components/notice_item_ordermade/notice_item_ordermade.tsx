import { Fragment } from "react";
import { client_notification_od } from "../../asset/client_notification_ordermade_items";
import "./notice_item_ordermade.scss";

const NoticeItemOrdermade = () => {
  return (
    <Fragment>
      <h4>{client_notification_od.text0}</h4>
      <ol>
        <li>{client_notification_od.text1}</li>
        <li>{client_notification_od.text2}</li>
        <li>{client_notification_od.text3}</li>
        <li>{client_notification_od.text4}</li>
      </ol>
    </Fragment>
  );
};

export default NoticeItemOrdermade;
