import "./SignIn.scss";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleButton from "react-google-button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typePass, setTypePass] = useState(false);

  const seePass = () => {
    setTypePass((prev) => !prev);
  };

  return (
    <Modal>
      <div className="sign-in_container">
        <div className="sign-in_content">
          <h1>Sign In</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail((prev) => (prev = e.target.value))}
            placeholder="Email"
          />
          <div>
            <input
              type={typePass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword((prev) => (prev = e.target.value))}
              placeholder="Password"
            />
            <div className="see_pass" onClick={seePass}>
              {typePass ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
            </div>
          </div>

          <div className="btn-login">
            <button>Login</button>
          </div>
          <div className="forgot_pass">
            <a href="#">Forgot password?</a>
          </div>
          <div className="line_with_text">
            <div className="line"></div>
            <div className="text">or</div>
            <div className="line"></div>
          </div>
          <GoogleButton />
        </div>
      </div>
    </Modal>
  );
};
export default SignIn;
