import { Link } from "react-router-dom";
import "./Cart.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/cartToggle";

const Cart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((data) => data.cartToggle.isOpen);

  let count = 0;
  return (
    <div className="cart" onClick={() => dispatch(toggleCart())}>
      <span>{count}</span>
      <ShoppingCartIcon />
    </div>
  );
};
export default Cart;
