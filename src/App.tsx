import React from "react";
import { Routes, Route } from "react-router-dom";

import BasicLayout from "./routes/basic-layout.component";
import Home from "./components/home/home.component";
import Item from "./components/item/item.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="item/*" element={<Item />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
