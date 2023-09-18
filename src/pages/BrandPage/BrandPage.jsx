import "./BrandPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const BrandPage = ({ brand }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.dataProduct.data);
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{brand}</h1>
    </div>
  );
};

export default BrandPage;
