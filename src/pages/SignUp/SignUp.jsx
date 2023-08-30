import "./SignUp.scss";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [typePass, setTypePass] = useState(false);

  const seePass = () => {
    setTypePass((prev) => !prev);
  };

  return (
    <Modal>
      <div className="sign-up_container">
        <div className="sign-up_content">
          <h1>Sign Up</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName((prev) => (prev = e.target.value))}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail((prev) => (prev = e.target.value))}
            placeholder="Email"
          />
          <input
            type={typePass ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword((prev) => (prev = e.target.value))}
            placeholder="Password"
          />
          <div>
            <input
              type={typePass ? "text" : "password"}
              value={password2}
              onChange={(e) => setPassword2((prev) => (prev = e.target.value))}
              placeholder="Repeat password"
            />
            <div className="see_pass" onClick={seePass}>
              {typePass ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
            </div>
          </div>
          <div className="agree">
            <input type="checkbox" name="" id="" />
            <span>I agree to the processing of my information</span>
          </div>
          <div className="btn-create">
            <button>Create an account</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default SignUp;