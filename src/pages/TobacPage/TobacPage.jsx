import { useSelector } from "react-redux";
import "./TobacPage.scss";
import CardBrandTobac from "../../components/CardBrandTobac/CardBrandTobac";
import { Outlet } from "react-router-dom";

const TobacPage = () => {
  const data = useSelector((state) => state.dataProduct.data);

  return (
    <div>
      <div className="tobac_container">
        {data.map((el, i) => (
          <CardBrandTobac brand={el.brand} logoURl={el.logoURl} key={i} />
        ))}
      </div>
    </div>
  );
};
export default TobacPage;
