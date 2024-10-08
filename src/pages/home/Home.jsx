import "./Home.css";
import { icons, subpages } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const Home = () => {
  const { user, isAuthenticated } = useAuth();

  const pdfUrl = "/document/SalazarMario_CV.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "SalazarMario_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const menu_list = subpages;

  return (
    <>
      <div className="home" id="home">
        <div className="home-box-container">
          <div className="home-box">
            <div className="home-info">
              {isAuthenticated ? (
                <>
                  <div className="dear">
                    <p>Dear {user.name}, Welcome to my web site</p>
                  </div>
                </>
              ) : (
                <></>
              )}
              <h3>Hi, I am Mario Salazar</h3>
              <div className="message">
                <img src={icons.information} alt="" className="icon-info" />

                <p>This Web Site is under construction</p>
              </div>
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
                    <img
                      src={icons.viewdocument}
                      alt=""
                      className="icon-menu"
                    />
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
              <li key={index} className="link-float">
                <a href={`#${item.to}`} className="link">
                  <img
                    src={item.icon}
                    alt=""
                    title={item.title}
                    className="icon-menu-float"
                  />
                  <p className="item-menu-float">{item.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
