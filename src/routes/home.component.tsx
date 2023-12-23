import { Fragment } from "react";

import Preview from "../components/preview/preview.component";
import Notice from "../components/notice/notice.component";

import { HomeLayout } from "../utilities/components.styles";

const Home = () => {
  return (
    <Fragment>
      <HomeLayout>
        <Notice />
        <Preview />
      </HomeLayout>
    </Fragment>
  );
};

export default Home;
