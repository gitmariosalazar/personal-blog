import React, { createContext, useContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { getCurrentUser, logout as Logout } from "../api/GetCurrentUser";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  useEffect(() => {
    const checkLogin = async () => {
      if (!cookies.jwt) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const response = await getCurrentUser();
        if (response) {
          setUser(response);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error fetching current user:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, [cookies.jwt]);

  const getUser = async () => {
    try {
      const res = await getCurrentUser();
      setUser(res);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error fetching current user: ", error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };
  const logout = async () => {
    try {
      await Logout();
      removeCookie("jwt", { path: "/" });
      setUser(null);
      setIsAuthenticated(false);
      console.log("Logout successful");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        getUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
