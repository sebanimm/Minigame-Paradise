import { Routes, Route } from "react-router-dom";
import Main from "@/pages/Main";
import Selection from "@/pages/Selection";
import Introduction from "@/pages/Introduction";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/selection" element={<Selection />} />
      <Route path="/introduction" element={<Introduction />} />
    </Routes>
  );
};

export default App;
