import "./BrandPage.scss";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const BrandPage = ({ brand }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{brand}</h1>
      {/* <Outlet /> */}
    </div>
  );
};

export default BrandPage;
