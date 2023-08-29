import { useDispatch } from "react-redux";
import "./Modal.css";
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
        {children}
      </div>
    </div>
  );
};

export default Modal;
