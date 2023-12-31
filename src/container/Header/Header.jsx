import "./Header.scss";
import Cart from "../../components/Cart/Cart";
import BtnBurgerMenu from "../../components/BurgerMenu/BtnBurger/BtnBurgerMenu";
import LogIn from "../../components/LogIn/LogIn";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header_menu">
        <BtnBurgerMenu />
      </div>
      <div className="header_name">
        <div className="header_title">
          <Link to="/">Toba4ok_UA</Link>
        </div>
        {/* <div className="icon_ua">
          <img src="./assets/icons/ukraine_icon.png" alt="Ukraine" />
        </div> */}
      </div>
      <div className="header_cart-avatar">
        <div className="header_cart">
          <Cart />
        </div>
        <div className="header_avatar">
          <LogIn />
        </div>
      </div>
    </header>
  );
};
export default Header;
