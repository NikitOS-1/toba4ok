import { Link, NavLink } from "react-router-dom";
import "./CardBrandTobac.scss";
import { useDispatch } from "react-redux";
import { sellectBrand } from "../../redux/sellectBrandTobaco";

const CardBrandTobac = ({ logoURl, brand }) => {
  const dispatch = useDispatch();

  const selectBrand = () => {
    dispatch(sellectBrand(brand));
    localStorage.setItem("selectedBrand", JSON.stringify(brand));
  };

  return (
    <div className="container-card_brand_tobac">
      <NavLink to={`/tobac/${brand}`} onClick={selectBrand}>
        <img src={logoURl} alt={logoURl} />
        <h3>{brand}</h3>
      </NavLink>
    </div>
  );
};
export default CardBrandTobac;
