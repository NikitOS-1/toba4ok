import "./SignIn.scss";
import Modal from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typePass, setTypePass] = useState(false);
  const [error, setError] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) {
      navigate("/user");
    }
  }, []);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const seePass = () => setTypePass((prev) => !prev);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/user");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(credential);
        console.log(token);
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Modal>
      <div className="sign-in_container">
        <form onSubmit={handleSubmit(signIn)}>
          <div className="sign-in_content">
            <h1>Sign In</h1>

            <label className="email">
              <input
                type="email"
                {...register("email", {
                  required: "You need to fill in a Email",
                  minLength: {
                    value: 5,
                    message: "This is not a valid email",
                  },
                  pattern: {
                    value: /[@]/,
                    message: "This is not a valid email",
                  },
                  pattern: {
                    value: /[.]/,
                    message: "This is not a valid email",
                  },
                })}
                value={email}
                onChange={(e) => setEmail((prev) => (prev = e.target.value))}
                placeholder="Email"
              />
            </label>
            <div className="error">
              {errors?.email && (
                <p style={{ color: "tomato" }}>
                  {errors?.email?.message || "Error!"}
                </p>
              )}
            </div>

            <label className="pass">
              <div className="password">
                <input
                  {...register("pass", {
                    required: "You need to fill in a password",
                    minLength: {
                      value: 6,
                      message: "Your password must be at least 6 characters",
                    },
                  })}
                  type={typePass ? "text" : "password"}
                  value={password}
                  onChange={(e) =>
                    setPassword((prev) => (prev = e.target.value))
                  }
                  placeholder="Password"
                />
                <div className="see_pass" onClick={seePass}>
                  {typePass ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                </div>
              </div>
            </label>
            <div className="error">
              {errors?.pass && (
                <p style={{ color: "tomato", margin: "0px 0px 20px 0px" }}>
                  {errors?.pass?.message || "Error!"}
                </p>
              )}
            </div>

            <div className="error_all">
              {error && (
                <p style={{ color: "tomato", margin: "20px 0px" }}>
                  {error || "Error!"}
                </p>
              )}
            </div>

            <div className="btn-login">
              <button type="submit">Login</button>
            </div>

            <div className="forgot_pass">
              <a href="#">Forgot password?</a>
            </div>

            <div className="line_with_text">
              <div className="line"></div>
              <div className="text">or</div>
              <div className="line"></div>
            </div>

            <div className="btn-google">
              <GoogleButton onClick={signInWithGoogle} />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default SignIn;
