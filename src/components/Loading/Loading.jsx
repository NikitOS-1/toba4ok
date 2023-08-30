import "./Loading.scss";
import { LinearProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="loading">
      <LinearProgress color="secondary" />
    </div>
  );
};
export default Loading;
