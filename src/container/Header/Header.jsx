import "./Header.scss";
import Cart from "../../components/Cart/Cart";
import BtnBurgerMenu from "../../components/BurgerMenu/BtnBurger/BtnBurgerMenu";
import MenuList from "../../components/BurgerMenu/MenuList/MenuList";

const Header = () => {
  return (
    <div className="header">
      <div className="header_menu">
        <BtnBurgerMenu />
      </div>
      <div className="header_name">
        Toba4ok UA <img src="./assets/icons/ukraine_icon.png" alt="d" />
      </div>
      <div className="header_cart">
        <Cart />
      </div>
    </div>
  );
};
export default Header;
