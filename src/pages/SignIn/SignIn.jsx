import { useDispatch, useSelector } from "react-redux";
import { closeModal, isOpen, openModal } from "../../redux/modalReducer";
import Modal from "../../components/Modal/Modal";
import "./SignIn.scss";
import { useEffect } from "react";

const SignIn = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(isOpen);

  useEffect(() => {
    dispatch(openModal());
  }, [dispatch]);

  return (
    <div className="sign-in_container">
      {modalOpen && (
        <Modal>
          <div>
            <h1>Sign In</h1>
            <input type="text" />
            <input type="text" />
            <button>Login</button>
            <a href="#">Forgot password</a>
          </div>
        </Modal>
      )}
    </div>
  );
};
export default SignIn;
