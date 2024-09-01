import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { icons, list_menu, menuicons } from "../../assets/assets";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import UserMenu from "./UserMenu";
import { useAuth } from "../../context/useAuth";

export const Navbar = () => {
  const { user, getUser, isAuthenticated } = useAuth();

  useEffect(() => {
    getUser();
  }, [getUser]);
  var menu_list = list_menu.filter((menu) => menu.state === "public");
  if (user && isAuthenticated) {
    menu_list = list_menu;
  }

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
            <li key={index} className="menu-item">
              <Link
                key={index}
                to={item.to}
                className={
                  menu === item.menu ? "active menu-link" : "menu-link"
                }
                onClick={() => {
                  setMenu(item.menu);
                  setIconbar(!iconbar);
                }}
              >
                <img src={item.icon} alt="" className="icon-menu" />
                {item.title}
              </Link>
              {item.submenu && item.submenu.length > 0 && (
                <ul className="submenu">
                  {item.submenu.map((subitem, subindex) => (
                    <li key={subindex} className="submenu-list">
                      <Link
                        to={subitem.to}
                        className="item-submenu"
                        onClick={() => {
                          setMenu(item.menu);
                          setIconbar(!iconbar);
                        }}
                      >
                        <img src={subitem.icon} alt="" className="icon-menu" />
                        <p>{subitem.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
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
