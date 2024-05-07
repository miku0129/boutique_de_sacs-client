import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../components/admin-dashboard/admin-dashboard.component";
import AdminLogin from "../components/admin-login/admin-login.component";
import AdminProfile from "../components/admin-profile/admin-profile.component";
import AdminItemEdit from "../components/admin-item-edit/admin-item-edit.component";

const Admin = () => {
  console.log("Is NODE_ENV PROD?: ", import.meta.env.PROD)
  return (
    <>
      <Routes>
        <Route index element={<AdminLogin />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="profile" element={<AdminProfile />} />
        <Route path="dashboard/item/:id/edit" element={<AdminItemEdit />} />
      </Routes>
    </>
  );
};

export default Admin;
