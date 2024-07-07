import "./Home.css";
import { icons, list_menu } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const pdfUrl = "/document/SalazarMario_CV.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "SalazarMario_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [iconbar, setIconbar] = useState(true);
  const menu_list = list_menu;

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
              <div className="btn-downloadcv">
                <button className="box-btn" onClick={handleDownload}>
                  <img src={icons.pdfdownload} alt="" className="icon-menu" />
                  <p>Download CV</p>
                </button>
                <Link to="/pdf" className="box-btn">
                  <img src={icons.viewdocument} alt="" className="icon-menu" />
                  <p>View CV</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="home-box">
          <img src={icons.mario} alt="" className="gif" />
        </div>
      </div>
      <div id="float-nav" className="navbar-float">
        <ul className="navbar-menu-float">
          {menu_list.map((item, index) => (
            <Link key={index} to={item.to} className="link-float">
              <img
                src={item.icon}
                alt=""
                title={item.title}
                className="icon-menu-float"
              />
              <p className="item-menu-float">{item.title}</p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
