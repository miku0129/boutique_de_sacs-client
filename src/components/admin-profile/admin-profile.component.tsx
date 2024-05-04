import { useNavigate } from "react-router-dom";
import HankoProfile from "../../utilities/hanko/hanko-profile.component";
import { CustomBtn, CustomBtnGroup } from "../../utilities/components.styles";
import { btn_back } from "../../asset/asset";

const AdminProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CustomBtnGroup>
        <CustomBtn type="button" onClick={() => navigate(-1)}>
          {btn_back}
        </CustomBtn>
      </CustomBtnGroup>
      <HankoProfile />
    </div>
  );
};

export default AdminProfile;
