import HankoLogoutBtn from "../../utilities/hanko/hanko-logout-btn/hanko-logout-btn.component";
import { useUserData } from "../../utilities/hanko/hanko-useUserData.hooks";
import {
  CustomLink,
  CustomBtn,
  CustomBtnLow,
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
      <CustomBtnLow>
        <CustomLink to={"/admin/profile"}>
          <CustomBtn>Profile</CustomBtn>
        </CustomLink>
        <HankoLogoutBtn />
      </CustomBtnLow>
    </div>
  );
};

export default AdminDashboard;
