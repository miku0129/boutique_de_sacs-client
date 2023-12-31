import { Routes, Route } from "react-router-dom";

import BasicLayout from "./routes/basic-layout.component";
import Home from "./routes/home.component";
import Item from "./components/item/item.component";
import Contact from "./components/contact/contact.component";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="item/:id" element={<Item />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
