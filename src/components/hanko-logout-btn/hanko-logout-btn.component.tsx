import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";
import { CustomBtn } from "../../utilities/components.styles";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

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
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <CustomBtn onClick={logout} style={{ width: "100px" }}>
      Logout
    </CustomBtn>
  );
}

export default HankoLogoutBtn;
