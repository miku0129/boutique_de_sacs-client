import AdminItemForm from "../admin-item-form/admin-item-form.component";
import AdminItemList from "../admin-item-list/admin-item-list.component";
import HankoLogoutBtn from "../../utilities/hanko/hanko-logout-btn/hanko-logout-btn.component";
import { useUserData } from "../../utilities/hanko/hanko-useUserData.hooks";
import { formTypes } from "../../types/types";
import { formStateTemplate, msg_loading } from "../../asset/asset";
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
    return <h4>{msg_loading}</h4>;
  }
  if (userDataError) {
    return <div>{userDataError}</div>;
  }

  const checkAuth = () => {
    const authEmail = import.meta.env.VITE_ADMIN_EMAIL_LIST.split(",");
    return authEmail.filter((auth: string) => auth === email).length > 0;
  };

  return (
    <div className="admin-content-container">
      <CustomBtnGroup>
        <CustomLink to={"/admin/profile"}>
          <CustomBtn>Profile</CustomBtn>
        </CustomLink>
        <HankoLogoutBtn />
      </CustomBtnGroup>
      {checkAuth() && (
        <div className="admin-contents">
          <AdminItemForm
            props={{
              formType: formTypes["REGISTER"],
              formStateTemplate: formStateTemplate,
            }}
          />
          <AdminItemList />
        </div>
      )}
      {!checkAuth() && <div>Erreur d'autorité</div>}
    </div>
  );
};

export default AdminDashboard;
