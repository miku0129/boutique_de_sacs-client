import HankoProfile from "../hanko-profile/hanko-profile.component";
import HankoLogoutBtn from "../hanko-logout-btn/hanko-logout-btn.component";
import "./admin-dashboard.styles.scss";

const AdminDashboard = () => {
  return (
    <>
      <h1>dashboard</h1>
      <HankoLogoutBtn />
      <HankoProfile />
    </>
  );
};

export default AdminDashboard;
