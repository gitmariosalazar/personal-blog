import InputLabel from "../../components/inputs/InputLabel";
import InputPassword from "../../components/inputs/InputPassword";
import { icons } from "../../assets/assets";
import { LoginOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const google = () => {
    window.open("http://localhost:4000/api/auth/google-login", "_self");
  };

  const twitter = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-box">
          <h3 className="project-title">
            Login Page
            <div className="underline-project">
              <span></span>
            </div>
          </h3>

          <div className="input-horizantal-1">
            <div className="input-box">
              <InputLabel
                type="email"
                label="Email Address"
                placeholder="mariosalazar.ms.10@gmail.com"
                leftIcon={icons.user_icon}
                rightIcon={icons.email}
              />
            </div>
            <div className="input-box">
              <InputPassword
                type="password"
                label="Secret Key"
                placeholder="*****************************"
                rightIcon={icons.email}
                leftIcon={icons.key}
              />
            </div>
          </div>
          <div className="login-btn">
            <button className="btn-login">
              <LoginOutlined /> Login
            </button>
          </div>
          <div className="no-account">
            <p>{"Don't have an account?"}</p>
            <Link className="sign-up">Sign Up</Link>
          </div>
          <div className="login-with">
            <p>Login with</p>
            <div className="login-buttons">
              <div className="login-icons">
                <div className="btns" onClick={google}>
                  <img
                    src={icons.google}
                    alt=""
                    className="icon-login"
                    title="Google"
                  />
                </div>
                <div className="btns" onClick={facebook}>
                  {" "}
                  <img
                    src={icons.facebook}
                    alt=""
                    className="icon-login"
                    title="Facebook"
                  />
                </div>
                <div className="btns" onClick={twitter}>
                  {" "}
                  <img
                    src={icons.twitter}
                    alt=""
                    className="icon-login"
                    title="Twiter"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
