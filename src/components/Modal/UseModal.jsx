import { useDispatch, useSelector } from "react-redux";
import { isOpen, openModal } from "../../redux/modalReducer";
import Modal from "./Modal";
import { useEffect } from "react";

const UseModal = ({ content }) => {
  const modalOpen = useSelector(isOpen);
  const dispatch = useDispatch();

  return <div>{modalOpen && <Modal>{content}</Modal>}</div>;
};

export default UseModal;
