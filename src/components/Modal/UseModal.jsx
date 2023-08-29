import { useDispatch, useSelector } from "react-redux";
import { isOpen } from "../../redux/modalReducer";
import Modal from "./Modal";

const UseModal = ({ button, info }) => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(isOpen);

  return (
    <div>
      <div>{button}</div>
      {modalOpen && <Modal>{info}</Modal>}
    </div>
  );
};
export default UseModal;
