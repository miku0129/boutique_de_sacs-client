import HankoLogoutBtn from "../../utilities/hanko/hanko-logout-btn/hanko-logout-btn.component";
import AdminItemList from "../admin-item-list/admin-item-list.component";
import AdminItemRegister from "../admin-item-register/admin-item-register.component";
import { useUserData } from "../../utilities/hanko/hanko-useUserData.hooks";
import {
  CustomLink,
  CustomBtn,
  CustomBtnGroup,
} from "../../utilities/components.styles";
import "./admin-dashboard.styles.scss";

const AdminDashboard = () => {
  const {
    // id,
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
      <AdminItemRegister />
      <AdminItemList />
    </div>
  );
};

export default AdminDashboard;
