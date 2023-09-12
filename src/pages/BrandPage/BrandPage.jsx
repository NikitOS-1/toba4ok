import "./BrandPage.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteBrand } from "../../redux/sellectBrandTobaco";
import { useLocation, useNavigate } from "react-router-dom";

const BrandPage = ({ brand }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{brand}</h1>
    </div>
  );
};

export default BrandPage;
