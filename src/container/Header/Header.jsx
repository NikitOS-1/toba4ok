import "./Header.scss";
import Cart from "../../components/Cart/Cart";
import BtnBurgerMenu from "../../components/BurgerMenu/BtnBurger/BtnBurgerMenu";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="header_menu">
        <BtnBurgerMenu />
      </div>
      <div className="header_name">
        <div className="header_title">Toba4ok_UA</div>
        <div className="icon_ua">
          <img src="./assets/icons/ukraine_icon.png" alt="Ukraine" />
        </div>
      </div>
      <div className="header_cart-avatar">
        <div className="header_cart">
          <Cart />
        </div>
        <div className="header_avatar">
          <Avatar />
        </div>
      </div>
    </div>
  );
};
export default Header;
