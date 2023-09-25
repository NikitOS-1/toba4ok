import { Link } from "react-router-dom";
import "./Cart.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  let count = 0;
  return (
    <div className="cart">
      <Link to={"cart"}>
        <span>{count}</span>
        <ShoppingCartIcon />
      </Link>
    </div>
  );
};
export default Cart;
