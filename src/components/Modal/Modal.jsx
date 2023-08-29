import { useDispatch } from "react-redux";
import "./Modal.scss";
import { toggleModal } from "../../redux/modalReducer";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <div className="modal-container">
      <div className="modal">
        <button
          className="modal_button-close"
          onClick={() => dispatch(toggleModal())}>
          Close
        </button>
        <div className="modal_content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
