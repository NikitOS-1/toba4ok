import { useDispatch, useSelector } from "react-redux";
import "./BtnBurgerMenu.scss";
import { toggleMenu } from "../../../redux/burgerMenuReducer";

const BtnBurgerMenu = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((data) => data.burgerMenu.isOpen);

  return (
    <div
      className={`burger-menu ${isOpen ? "active" : ""}`}
      onClick={() => dispatch(toggleMenu())}>
      <div className="burger-menu-line one"></div>
      <div className="burger-menu-line two"></div>
      <div className="burger-menu-line three"></div>
    </div>
  );
};
export default BtnBurgerMenu;
