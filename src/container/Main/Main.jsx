import { Route, Routes } from "react-router-dom";
import MenuList from "../../components/BurgerMenu/MenuList/MenuList";
import "./Main.scss";
import SignIn from "../../pages/SignIn/SignIn";
import HomePage from "../../pages/HomePage/HomePage";

const Main = () => {
  return (
    <main className="main">
      <MenuList />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </main>
  );
};
export default Main;
