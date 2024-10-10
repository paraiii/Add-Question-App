import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddTask } from "./pages/AddQuestion";
import { UserProfile } from "./pages/UserProfile";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddTask />} />
      <Route path="/user" element={<UserProfile />} />
    </Routes>
  );
};

export default AppRouter;
