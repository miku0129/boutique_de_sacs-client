import HankoLogoutBtn from "../../utilities/hanko/hanko-logout-btn/hanko-logout-btn.component";
import AdminItemList from "../admin-item-list/admin-item-list.component";
import AdminItemFormContainer from "../admin-item-form-container/admin-item-form-container.component";
import { useUserData } from "../../utilities/hanko/hanko-useUserData.hooks";

import { formTypes } from "../../types/types";

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
    return <div>Loading...</div>;
  }
  if (userDataError) {
    return <div>{userDataError}</div>;
  }

  return (
    <div>
      <p>Bonjour, {email}</p>
      <CustomBtnGroup>
        <CustomLink to={"/admin/profile"}>
          <CustomBtn>Profile</CustomBtn>
        </CustomLink>
        <HankoLogoutBtn />
      </CustomBtnGroup>
      {email === import.meta.env.VITE_ADMIN_EMAIL && (
        <div>
          <AdminItemFormContainer props={{ formType: formTypes["REGISTER"] }} />
          <AdminItemList />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
