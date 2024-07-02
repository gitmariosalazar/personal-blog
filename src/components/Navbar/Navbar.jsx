import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../assets/assets";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import UserMenu from "./UserMenu";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  return (
    <div className="navbar">
      <Link to="/" onClick={() => setMenu("home")}>
        <img className="logo" src={icons.logosenb} alt="" />
      </Link>
      <div className="navbar-list">
        <ul className="navbar-menu">
          <Link
            to="/"
            className={menu === "home" ? "active" : ""}
            onClick={() => setMenu("home")}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className={menu === "contact" ? "active" : ""}
            onClick={() => setMenu("contact")}
          >
            Contact me
          </Link>
          <Link
            to="/curriculum"
            className={menu === "curriculum" ? "active" : ""}
            onClick={() => setMenu("curriculum")}
          >
            Curriculum Vitae
          </Link>
          <Link
            to="/certifications"
            className={menu === "certifications" ? "active" : ""}
            onClick={() => setMenu("certifications")}
          >
            Certifications
          </Link>
          <Link
            to="/education"
            className={menu === "education" ? "active" : ""}
            onClick={() => setMenu("education")}
          >
            Education
          </Link>
          <Link
            to="/profile"
            className={menu === "profile" ? "active" : ""}
            onClick={() => setMenu("profile")}
          >
            Profile
          </Link>
          <Link
            to="/projects"
            className={menu === "projects" ? "active" : ""}
            onClick={() => setMenu("projects")}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className={menu === "skills" ? "active" : ""}
            onClick={() => setMenu("skills")}
          >
            Skills
          </Link>
        </ul>
      </div>
      <div className="nabvar-right">
        <SearchIcon />
        <div className="navbar-search-icon">
          <Link to="/">
            <NotificationsIcon />
          </Link>
          <div className="dot"></div>
        </div>
        <UserMenu />
      </div>
    </div>
  );
};
