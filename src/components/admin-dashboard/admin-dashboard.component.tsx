import HankoLogoutBtn from "../hanko-logout-btn/hanko-logout-btn.component";
import { CustomLink, CustomBtn, CustomBtnLow } from "../../utilities/components.styles";
import "./admin-dashboard.styles.scss";

const AdminDashboard = () => {
  return (
    <div>
      <CustomBtnLow>
        <CustomLink to={"/admin/profile"}>
          <CustomBtn>Profile</CustomBtn>
        </CustomLink>
        <HankoLogoutBtn />
      </CustomBtnLow>
      <h1>dashboard</h1>
    </div>
  );
};

export default AdminDashboard;
