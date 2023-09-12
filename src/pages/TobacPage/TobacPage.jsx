import "./TobacPage.scss";
import CardBrandTobac from "../../components/CardBrandTobac/CardBrandTobac";

const TobacPage = () => {
  return (
    <div>
      <div className="tobac_container">
        <div>tobac</div>
        {/* {brandTobaco.map((el, i) => (
          <CardBrandTobac brand={el.brand} logoURl={el.logoURl} key={i} />
        ))} */}
      </div>
    </div>
  );
};
export default TobacPage;
