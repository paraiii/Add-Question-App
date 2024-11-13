import { Route, Routes } from "react-router-dom";
import { AddQuestion } from "./pages/AddQuestion";
import { Categories } from "./pages/Categories";
import { Home } from "./pages/Home";
import { UserProfile } from "./pages/UserProfile";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddQuestion mode={"light"} />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
};

export default AppRouter;
