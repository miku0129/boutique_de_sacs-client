import { useNavigate } from "react-router-dom";
import HankoProfile from "../../utilities/hanko/hanko-profile.component";
import { CustomBtn, CustomBtnGroup } from "../../utilities/components.styles";

const AdminProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CustomBtnGroup>
        <CustomBtn type="button" onClick={() => navigate(-1)}>
          Retour
        </CustomBtn>
      </CustomBtnGroup>
      <HankoProfile />
    </div>
  );
};

export default AdminProfile;
