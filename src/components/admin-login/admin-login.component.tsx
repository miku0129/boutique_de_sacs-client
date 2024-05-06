import HankoAuth from "../../utilities/hanko/hanko-auth.component";

const AdminLogin = () => {
  console.log("env", import.meta.env.PROD)

  return <HankoAuth />
};

export default AdminLogin
