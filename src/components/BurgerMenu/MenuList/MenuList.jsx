import { useDispatch, useSelector } from "react-redux";
import "./MenuList.scss";

const MenuList = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((data) => data.burgerMenu.isOpen);

  return (
    <div className={`burger-list ${isOpen ? "active" : ""}`}>MenuList</div>
  );
};
export default MenuList;
