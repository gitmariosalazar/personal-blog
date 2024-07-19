import InputLabel from "../../components/inputs/InputLabel";
import InputPassword from "../../components/inputs/InputPassword";
import { icons } from "../../assets/assets";
import { PersonAddAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import { API_URL } from "../../config";
import { useAuth } from "../../context/authContext";

const Register = () => {
  const { user, signup } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifypassword, setVerifypassword] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = async (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = async (e) => {
    setPassword(e.target.value);
  };

  const handleChangeVerifyPassword = async (e) => {
    setVerifypassword(e.target.value);
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
    signup(data);
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-box">
          <h3 className="register-title">
            Sign Up
            <div className="underline-project">
              <span></span>
            </div>
          </h3>

          <div className="input-horizantal-1">
            <div className="input-box">
              <InputLabel
                type="text"
                label="Full Name"
                value={name}
                onChange={handleChangeName}
                placeholder="Mario Salazar"
                rightIcon={icons.user_icon}
              />
            </div>

            <div className="input-box">
              <InputLabel
                type="email"
                label="Email Address"
                value={email}
                onChange={handleChangeEmail}
                placeholder="mariosalazar.ms.10@gmail.com"
                rightIcon={icons.email}
              />
            </div>
            <div className="input-box">
              <InputPassword
                type="password"
                label="Secret Key"
                value={password}
                onChange={handleChangePassword}
                placeholder="*****************************"
                rightIcon={icons.email}
                leftIcon={icons.key}
              />
            </div>
            <div className="input-box">
              <InputPassword
                type="password"
                label="Confirm Secret Key"
                value={verifypassword}
                onChange={handleChangeVerifyPassword}
                placeholder="*****************************"
                rightIcon={icons.email}
                leftIcon={icons.key}
              />
            </div>
          </div>
          <div className="login-btn">
            <button
              className="btn-login"
              onClick={() => onSubmit({ name, email, password })}
            >
              <PersonAddAlt /> Create Account
            </button>
          </div>
          <div className="no-account">
            <p>{"Don't have an account?"}</p>
            <Link to="/login" className="sign-up">
              Login
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

export default Register;
