import InputLabel from "../../components/inputs/InputLabel";
import InputPassword from "../../components/inputs/InputPassword";
import { icons } from "../../assets/assets";
import { LoginOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useAuth } from "../../context/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signin, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  const handleChangeUserName = async (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = async (e) => {
    setPassword(e.target.value);
  };

  const google = () => {
    window.open(API_URL + "/auth/google", "_self");
  };

  const twitter = () => {
    window.open(API_URL + "/auth/twitter", "_self");
  };

  const facebook = () => {
    window.open(API_URL + "/auth/facebook", "_self");
  };

  const github = () => {
    window.open(API_URL + "/auth/github", "_self");
  };

  const onSubmit = (data) => {
    signin(data);
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
                name="username"
                value={username}
                placeholder="mariosalazar.ms.10@gmail.com"
                leftIcon={icons.user_icon}
                rightIcon={icons.email}
                onChange={handleChangeUserName}
              />
            </div>
            <div className="input-box">
              <InputPassword
                type="password"
                name="password"
                label="Secret Key"
                value={password}
                placeholder="*****************************"
                rightIcon={icons.email}
                leftIcon={icons.key}
                onChange={handleChangePassword}
              />
            </div>
          </div>
          <div className="login-btn">
            <button
              className="btn-login"
              onClick={() => onSubmit({ username, password })}
            >
              <LoginOutlined /> Sign In
            </button>
          </div>
          <div className="no-account">
            <p>{"Don't have an account?"}</p>
            <Link to="/register" className="sign-up">
              Sign Up
            </Link>
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
                <div className="btns" onClick={github}>
                  {" "}
                  <img
                    src={icons.github_white}
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
