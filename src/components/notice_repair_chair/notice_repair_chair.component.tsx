import { Fragment } from "react";
import { client_notification_rp } from "../../asset/client_notification_repair_chair";
import "./notice_repair_chair.styles.scss";

const NoticeRepairChair = () => {
  return (
    <Fragment>
      <h4>{client_notification_rp.text0}</h4>
      <ol>
        <li>{client_notification_rp.text1}</li>
        <li>{client_notification_rp.text2}</li>
        <li>{client_notification_rp.text3}</li>
        <li>{client_notification_rp.text4}</li>
      </ol>
    </Fragment>
  );
};

export default NoticeRepairChair;
