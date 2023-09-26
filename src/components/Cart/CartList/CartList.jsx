import { useDispatch, useSelector } from "react-redux";
import "./CartList.scss";
import { toggleCart } from "../../../redux/cartToggle";

const CartList = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((data) => data.cartToggle.isOpen);

  return (
    <div className={`wrap_cart ${isOpen ? "active" : ""}`}>
      <div onClick={() => dispatch(toggleCart())}>X</div>
      <h2>CartList</h2>
    </div>
  );
};
export default CartList;
