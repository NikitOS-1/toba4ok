import { useDispatch, useSelector } from "react-redux";
import "./MenuList.scss";

const MenuList = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((data) => data.burgerMenu.isOpen);

  return (
    <div className={`burger-list ${isOpen ? "active" : ""}`}>
      <ul className="item-list">
        <li>Tobac</li>
        <li>Сoals</li>
        <li>About</li>
        <li>Contact</li>
        <li>Shiping</li>
      </ul>
    </div>
  );
};
export default MenuList;
