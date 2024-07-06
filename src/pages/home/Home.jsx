import "./Home.css";
import { icons } from "../../assets/assets";
import { Description } from "@mui/icons-material";

const Home = () => {
  return (
    <div className="home">
      <div className="home-box-container">
        <div className="home-box">
          <div className="home-info">
            <h3>Hi, I am Mario Salazar</h3>
            <div className="home-info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum facere, voluptate iure non culpa porro placeat in
                perspiciatis quo cum maxime.
              </p>
            </div>
            <div className="home-icon-box">
              <img src={icons.backend} alt="" className="icon-home" />
              <h4>Backend Developer</h4>
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
              <h4>Frontend Developer</h4>
            </div>
            <div className="home-info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum facere, voluptate iure
              </p>
            </div>
            <hr />
            <div className="btn-downloadcv-box">
              <button className="btn-downloadcv">
                <Description /> Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="home-box">
          <img src={icons.mario} alt="" className="gif" />
        </div>
      </div>
    </div>
  );
};

export default Home;
