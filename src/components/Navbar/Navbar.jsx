import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { icons, menuicons } from "../../assets/assets";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import UserMenu from "./UserMenu";

const menu_list = [
  {
    id: 1,
    title: "Home",
    menu: "home",
    to: "/",
    icon: menuicons.home,
  },
  {
    id: 2,
    title: "Contact me",
    menu: "contact",
    to: "/contact",
    icon: menuicons.contactme,
  },
  {
    id: 3,
    title: "Curriculum Vitae",
    menu: "curriculum",
    to: "/curriculum",
    icon: menuicons.cv,
  },
  {
    id: 4,
    title: "Certifications",
    menu: "certifications",
    to: "/certifications",
    icon: menuicons.certificate,
  },
  {
    id: 5,
    title: "Education",
    menu: "education",
    to: "/education",
    icon: menuicons.education,
  },
  {
    id: 6,
    title: "Profile",
    menu: "profile",
    to: "/profile",
    icon: menuicons.profile,
  },
  {
    id: 7,
    title: "Projects",
    menu: "projects",
    to: "/projects",
    icon: menuicons.projects,
  },
  {
    id: 8,
    title: "Skills",
    menu: "skills",
    to: "/skills",
    icon: menuicons.skills,
  },
];

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [iconbar, setIconbar] = useState(true);
  useEffect(() => {
    console.log(menu);
  }, [menu]);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" onClick={() => setMenu("home")}>
          <img className="logo" src={icons.logosenb} alt="" />
        </Link>
        <div id="movile" className="menubar">
          <img
            src={iconbar ? menuicons.menubar : menuicons.close}
            alt=""
            className="icon-menu-bar"
            onClick={() => {
              setIconbar(!iconbar);
              console.log(iconbar);
            }}
          />
        </div>
      </div>
      <div
        id="list-menu"
        className={iconbar ? "navbar-list list-active" : "navbar-list"}
      >
        <ul className="navbar-menu">
          {menu_list.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={menu === item.menu ? "active menu-link" : "menu-link"}
              onClick={() => {
                setMenu(item.menu);
                setIconbar(!iconbar);
              }}
            >
              <img src={item.icon} alt="" className="icon-menu" />
              {item.title}
            </Link>
          ))}
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
