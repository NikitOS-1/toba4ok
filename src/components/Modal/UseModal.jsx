import { useSelector } from "react-redux";
import { isOpen } from "../../redux/modalReducer";
import Modal from "./Modal";

const UseModal = ({ content }) => {
  const modalOpen = useSelector(isOpen);

  return <div>{modalOpen && <Modal>{content}</Modal>}</div>;
};

export default UseModal;
