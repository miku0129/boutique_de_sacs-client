import { useNavigate } from "react-router-dom";
import HankoProfile from "../hanko-profile/hanko-profile.component";
import { CustomBtn, CustomBtnLow } from "../../utilities/components.styles";

const AdminProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CustomBtnLow>
        <CustomBtn type="button" onClick={() => navigate(-1)}>
          Retour
        </CustomBtn>
      </CustomBtnLow>
      <HankoProfile />
    </div>
  );
};

export default AdminProfile;
