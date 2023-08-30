import { Route, Routes } from "react-router-dom";
import MenuList from "../../components/BurgerMenu/MenuList/MenuList";
import "./Main.scss";
import SignIn from "../../pages/SignIn/SignIn";
import HomePage from "../../pages/HomePage/HomePage";
import SignUp from "../../pages/SignUp/SignUp";
import TobacPage from "../../pages/TobacPage/TobacPage";

const Main = () => {
  return (
    <main className="main">
      <MenuList />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tobac" element={<TobacPage />} />
      </Routes>
    </main>
  );
};
export default Main;
