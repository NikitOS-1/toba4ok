import { useDispatch, useSelector } from "react-redux";
import "./MenuList.scss";
import { Link } from "react-router-dom";

const MenuList = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((data) => data.burgerMenu.isOpen);

  return (
    <div className={`burger-list ${isOpen ? "active" : ""}`}>
      <ul className="item-list">
        <li>
          <Link to="tobac">Tobac</Link>
        </li>
        <li>
          <Link to="coals">Сoals</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="shiping">Shiping</Link>
        </li>
      </ul>
    </div>
  );
};
export default MenuList;
