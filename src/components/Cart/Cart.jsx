import "./Cart.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  let count = 0;
  return (
    <div className="cart">
      <span>{count}</span>
      <ShoppingCartIcon />
    </div>
  );
};
export default Cart;
