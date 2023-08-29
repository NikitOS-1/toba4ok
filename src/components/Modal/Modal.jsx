import { useDispatch } from "react-redux";
import "./Modal.scss";
import { closeModal } from "../../redux/modalReducer";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ children, link }) => {
  const dispatch = useDispatch();

  return (
    <div className="modal-container">
      <div className="modal">
        <div
          className="modal_button-close"
          onClick={() => dispatch(closeModal())}>
          <Link to="/">
            <CloseIcon />
          </Link>
        </div>
        <div className="modal_content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
