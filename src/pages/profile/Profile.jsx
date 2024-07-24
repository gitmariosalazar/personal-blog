import Bubbles from "../../components/bubbles/Bubbles";
import { AddCircleOutlineTwoTone } from "@mui/icons-material";
import { icons } from "../../assets/assets";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const Profile = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="home" id="about-me">
      <Bubbles>
        <div className="home-box-container">
          <div className="home-box">
            <div className="home-info">
              <h3>About me ...</h3>
              <div className="home-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum facere, voluptate iure non culpa porro placeat in
                  perspiciatis quo cum maxime.
                </p>
              </div>
              <div className="home-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum facere, voluptate iure non culpa porro placeat in
                  perspiciatis quo cum maxime.
                </p>
              </div>{" "}
              <div className="home-icon-box">
                <img src={icons.webdevelopment} alt="" className="icon-home" />
                <h4>Backend & Frontend Developer</h4>
              </div>
              <div className="home-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum facere, voluptate iure
                </p>
              </div>
              <hr />
              {user && isAuthenticated ? (
                <></>
              ) : (
                <div className="btn-sendmessage-box">
                  <Link className="btn-message" to="/login">
                    <AddCircleOutlineTwoTone /> Know more
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="home-box">
            <img src={icons.educationgif} alt="" className="gif" />
          </div>
        </div>
      </Bubbles>
    </div>
  );
};

export default Profile;
