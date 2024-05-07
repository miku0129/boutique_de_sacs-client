import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";
import { CustomLogoutBtn } from "./hanko-logout-btn.styles";

const hankoApi = import.meta.env.PROD
  ? import.meta.env.VITE_HANKO_API_URL_PROD
  : import.meta.env.VITE_HANKO_API_URL_DEV;

function HankoLogoutBtn() {
  const navigate = useNavigate();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const logout = async () => {
    try {
      await hanko?.user.logout();
      navigate("/admin");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <CustomLogoutBtn className="logout-btn" onClick={logout}>
      Logout
    </CustomLogoutBtn>
  );
}

export default HankoLogoutBtn;
