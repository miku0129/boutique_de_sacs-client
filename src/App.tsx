// import { useEffect } from "react";
// import { initializeItemsData } from "./utilities/firebase/firebase.utils";
import { Routes, Route } from "react-router-dom";

import BasicLayout from "./routes/basic-layout.component";
import Home from "./routes/home.component";
import Item from "./components/item/item.component";
import Contact from "./components/contact/contact.component";
import About from "./components/about/about.component";
import Admin from "./routes/admin.component";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // useEffect(() => {
  //   const initCategoryData = async () => {
  //     await initializeItemsData();
  //   };
  //   initCategoryData();
  // }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="item/:id" element={<Item />} />
          <Route path="about" element={<About />} />
          <Route path="admin/*" element={<Admin/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
