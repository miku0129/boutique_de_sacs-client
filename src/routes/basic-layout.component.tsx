import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/header/header.component";
import Footer from "../components/footer/footer.component";

const BasicLayout = () => {
  return (
    <Fragment>
        <Header />
        <Outlet />
        <Footer />
    </Fragment>
  );
};

export default BasicLayout;