import { useDispatch, useSelector } from "react-redux";
import "./CartList.scss";

const CartList = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((data) => data.cartToggle.isOpen);

  return <div className="wrap_cart">CartList</div>;
};
export default CartList;
