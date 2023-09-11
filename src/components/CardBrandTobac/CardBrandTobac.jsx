import "./CardBrandTobac.scss";

const CardBrandTobac = ({ logoURl, brand }) => {
  return (
    <div className="container-card_brand_tobac">
      <img src={logoURl} alt={logoURl} />
      <h3>{brand}</h3>
    </div>
  );
};
export default CardBrandTobac;
