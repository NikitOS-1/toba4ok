import { brandTobaco } from "../../redux/data_BrandTobaco";
import "./TobacPage.scss";

const TobacPage = () => {
  console.log(brandTobaco.length);
  return (
    <div>
      TobacPage
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {brandTobaco.map((el, i) => (
          <div key={i}>
            <img src={el.logoURl} alt="Logo" />
            <div>{el.brand}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TobacPage;
