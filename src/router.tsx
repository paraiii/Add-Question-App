import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddTask } from "./pages/AddQuestion";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddTask />} />
    </Routes>
  );
};

export default AppRouter;
