import { Routes, Route } from "react-router-dom";
import Main from "@/pages/Main";
import Selection from "@/pages/Selection";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/selection" element={<Selection />} />
    </Routes>
  );
};

export default App;
