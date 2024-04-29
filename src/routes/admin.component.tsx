import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../components/admin-dashboard/admin-dashboard.component";
import AdminLogin from "../components/admin-login/admin-login.component";
import AdminProfile from "../components/admin-profile/admin-profile.component";
import AdminItemEdit from "../components/admin-item-edit/admin-item-edit.component";

const Admin = () => {
  return (
    <>
      <Routes>
        <Route index element={<AdminLogin />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="dashboard/item/:id/edit" element={<AdminItemEdit />} />
        <Route path="profile" element={<AdminProfile />} />
      </Routes>
    </>
  );
};

export default Admin;
