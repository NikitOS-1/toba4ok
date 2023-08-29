import "./SignIn.scss";
import Modal from "../../components/Modal/Modal";

const SignIn = () => {
  return (
    <div className="sign-in_container">
      <Modal>
        <div>
          <h1>Sign In</h1>
          <input type="text" />
          <input type="text" />
          <button>Login</button>
          <a href="#">Forgot password</a>
        </div>
      </Modal>
    </div>
  );
};
export default SignIn;
