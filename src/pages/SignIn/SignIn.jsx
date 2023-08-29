import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="sign-in_container">
      <div>
        <h1>Sign In</h1>
        <input type="text" />
        <input type="text" />
        <button>Login</button>
        <a href="#">Forgot password</a>
      </div>
    </div>
  );
};
export default SignIn;
