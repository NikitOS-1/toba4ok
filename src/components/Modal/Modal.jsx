import { useDispatch } from "react-redux";
import "./Modal.scss";
import { closeModal } from "../../redux/modalReducer";
import { Link } from "react-router-dom";

const Modal = ({ children, link }) => {
  const dispatch = useDispatch();

  return (
    <div className="modal-container">
      <div className="modal">
        <button
          className="modal_button-close"
          onClick={() => dispatch(closeModal())}>
          <Link to="/">Close</Link>
        </button>
        <div className="modal_content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
