import { useCallback, useState } from "react";
import Avatar from "./Avatar";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import {
  Login,
  Logout,
  Settings,
  Dashboard,
  HowToReg,
  ShoppingCartSharp,
  Favorite,
} from "@mui/icons-material";
import BackDrop from "./BackDrop";
import "./UserMenu.css";
import { icons } from "../../assets/assets";
import { useAuth } from "../../context/useAuth";

function UserMenu() {
  const { user, getUser, isAuthenticated, loading, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div
          className="
      p-2 border-[1px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700
      "
          onClick={toggleOpen}
        >
          <Avatar
            src={
              isAuthenticated
                ? user?.photo
                : "https://i.postimg.cc/CxVYM67x/user-icon.png"
            }
            height={30}
            width={30}
          />
          <span className="text-slate-50">
            {isAuthenticated ? user?.name : ""}
          </span>
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div className="absolute rounded-md shadow-md w-[270px] border-[1px] border-slate-500 bg-slate-900 overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            {isAuthenticated ? (
              <div>
                <div className="user-head">
                  <div className="user-box">
                    <img src={icons.mario} alt="Google" />
                    <span className="user-span">MAS</span>
                  </div>
                  <div className="user-box-right">
                    <div className="flex justify-end items-end cursor-pointer rounded-sm">
                      <MenuItem
                        onClick={() => {
                          logout();
                          toggleOpen();
                        }}
                      >
                        <Logout className="mr-1" style={{ fontSize: 30 }} />{" "}
                        Sign Out
                      </MenuItem>
                    </div>
                  </div>
                </div>
                <div className="user-head">
                  <div className="user-image">
                    <Avatar src={user.photo} height={75} width={75} />
                  </div>
                  <div className="user-details-right">
                    <p className="user-name">{user.name}</p>
                    <p className="user-email">{user.email}</p>
                    <Link to="/" className="user-link">
                      My Microsoft account
                    </Link>
                    <Link to="/" className="user-link">
                      My Profile
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="user-footer">
                  <Link to="/login">
                    <MenuItem onClick={toggleOpen}>
                      <ShoppingCartSharp
                        className="mr-1"
                        style={{ fontSize: 20 }}
                      />{" "}
                      Your Orders
                    </MenuItem>
                  </Link>
                  <Link to="/">
                    <MenuItem onClick={toggleOpen}>
                      <Dashboard className="mr-1" style={{ fontSize: 20 }} />{" "}
                      Dashboard
                    </MenuItem>
                  </Link>
                  <Link to="/">
                    <MenuItem onClick={toggleOpen}>
                      <Settings className="mr-1" style={{ fontSize: 20 }} />{" "}
                      Settings
                    </MenuItem>
                  </Link>
                  <Link to="/">
                    <MenuItem onClick={toggleOpen}>
                      <Favorite className="mr-2" style={{ fontSize: 20 }} />
                      More Aboutme
                    </MenuItem>
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <Link to="/login">
                    <MenuItem onClick={toggleOpen}>
                      <Login className="mr-2" style={{ fontSize: 20 }} />
                      Login
                    </MenuItem>
                  </Link>
                  <Link to="/register">
                    <MenuItem onClick={toggleOpen}>
                      <HowToReg className="mr-2" style={{ fontSize: 20 }} />
                      Register
                    </MenuItem>
                  </Link>
                  <Link to="/">
                    <MenuItem onClick={toggleOpen}>
                      <Settings className="mr-2" style={{ fontSize: 20 }} />
                      Settings
                    </MenuItem>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
}

export default UserMenu;
