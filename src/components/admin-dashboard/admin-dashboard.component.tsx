import AdminItemForm from "../admin-item-form/admin-item-form.component";
import AdminItemList from "../admin-item-list/admin-item-list.component";
import HankoLogoutBtn from "../../utilities/hanko/hanko-logout-btn/hanko-logout-btn.component";
import { useUserData } from "../../utilities/hanko/hanko-useUserData.hooks";
import { formTypes } from "../../types/types";
import { formStateTemplate } from "../../asset/asset";
import {
  CustomLink,
  CustomBtn,
  CustomBtnGroup,
} from "../../utilities/components.styles";
import "./admin-dashboard.styles.scss";

const AdminDashboard = () => {

  const {
    email,
    loading: userDataLoading,
    error: userDataError,
  } = useUserData();

  if (userDataLoading) {
    return <h4>Loading...</h4>;
  }
  if (userDataError) {
    return <div>{userDataError}</div>;
  }

  return (
    <div className="admin-content-container">
      <p>Bonjour, {email}</p>
      <CustomBtnGroup>
        <CustomLink to={"/admin/profile"}>
          <CustomBtn>Profile</CustomBtn>
        </CustomLink>
        <HankoLogoutBtn />
      </CustomBtnGroup>
      {(email === import.meta.env.VITE_ADMIN_EMAIL_1 ||
        email === import.meta.env.VITE_ADMIN_EMAIL_2) && (
        <div className="admin-contents">
          <AdminItemForm props={{formType: formTypes["REGISTER"], formStateTemplate: formStateTemplate}}/>
          <AdminItemList />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
