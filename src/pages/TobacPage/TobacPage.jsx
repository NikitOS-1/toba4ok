import { useLocation, useMatch } from "react-router-dom";
import CardBrandTobac from "../../components/CardBrandTobac/CardBrandTobac";
import { brandTobaco } from "../../redux/data_BrandTobaco";
import "./TobacPage.scss";

const TobacPage = () => {
  return (
    <div>
      <div className="tobac_container">
        {brandTobaco.map((el, i) => (
          <CardBrandTobac brand={el.brand} logoURl={el.logoURl} key={i} />
        ))}
      </div>
    </div>
  );
};
export default TobacPage;
