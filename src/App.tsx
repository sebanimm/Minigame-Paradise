import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "@/pages/Main";
import Selection from "@/pages/Selection";
import Introduction from "@/pages/Introduction";
import FlyFly from "@/pages/FlyFly";
import Ranking from "@/pages/Ranking";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/selection" element={<Selection />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/flyfly" element={<FlyFly />} />
      <Route path="/ranking" element={<Ranking />} />
    </Routes>
  );
};

export default App;
