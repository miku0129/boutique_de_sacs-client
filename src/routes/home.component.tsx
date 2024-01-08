import { Fragment } from "react";

import Preview from "../components/preview/preview.component";

import { HomeLayout } from "../utilities/components.styles";

const Home = () => {
  return (
    <Fragment>
      <HomeLayout>
        <Preview />
      </HomeLayout>
    </Fragment>
  );
};

export default Home;
