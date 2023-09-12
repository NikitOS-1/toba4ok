import { Link } from "react-router-dom";
import "./CardBrandTobac.scss";
import { useDispatch } from "react-redux";
import { sellectBrand } from "../../redux/sellectBrandTobaco";

const CardBrandTobac = ({ logoURl, brand }) => {
  const dispatch = useDispatch();

  const selectBrand = () => {
    dispatch(sellectBrand(brand));
  };

  return (
    <div className="container-card_brand_tobac">
      <Link to={brand} onClick={selectBrand}>
        <img src={logoURl} alt={logoURl} />
        <h3>{brand}</h3>
      </Link>
    </div>
  );
};
export default CardBrandTobac;
