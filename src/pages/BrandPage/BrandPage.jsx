import "./BrandPage.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteBrand } from "../../redux/sellectBrandTobaco";
import { useNavigate } from "react-router-dom";
import { brandTobaco } from "../../redux/data_BrandTobaco";

const BrandPage = ({ brand }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filterBrand = brandTobaco.filter((el) => el.brand == brand);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{brand}</h1>
    </div>
  );
};

export default BrandPage;
