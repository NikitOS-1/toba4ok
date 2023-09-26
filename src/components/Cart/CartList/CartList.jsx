import { useDispatch, useSelector } from "react-redux";
import "./CartList.scss";
import { toggleCart } from "../../../redux/cartToggle";

const CartList = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((data) => data.cartToggle.isOpen);

  return (
    <div className={`wrap_cart ${isOpen ? "active_cart" : ""}`}>
      <div className="wrapper_cart">
        <div onClick={() => dispatch(toggleCart())} className="closed">
          X
        </div>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </div>
    </div>
  );
};
export default CartList;
