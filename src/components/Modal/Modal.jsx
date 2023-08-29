import { useDispatch } from "react-redux";
import "./Modal.scss";
import { closeModal } from "../../redux/modalReducer";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div className="modal-container">
      <div className="modal">
        <button
          className="modal_button-close"
          onClick={() => dispatch(closeModal())}>
          Close
        </button>
        <div className="modal_content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
