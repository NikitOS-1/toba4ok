import { useSelector } from "react-redux";
import "./TobacPage.scss";
import CardBrandTobac from "../../components/CardBrandTobac/CardBrandTobac";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const TobacPage = () => {
  const data = useSelector((state) => state.dataProduct.data);
  const navigate = useNavigate();
  return (
    <div>
      <nav className="btn-back">
        <ArrowBack />
        <div onClick={() => navigate(-1)}>Back</div>
      </nav>
      <div className="tobac_container">
        {data.map((el, i) => (
          <CardBrandTobac brand={el.brand} logoURl={el.logoURl} key={i} />
        ))}
      </div>
    </div>
  );
};
export default TobacPage;
