import React, { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import {
  getCurrentUser,
  loginRequest,
  logout as Logout,
  registerRequest,
} from "../api/auth";
import { ToastCustom } from "../components/ui/ToastCustom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const [errors, setErrors] = useState([]);

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

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      if (res.data.user != null) {
        setUser(res.data.user);
        setIsAuthenticated(true);
        ToastCustom(
          "success",
          res.data.message,
          "Success Message",
          "top-right"
        );
      } else {
        ToastCustom("info", res.data.message, "Info Message", "top-right");
      }
    } catch (error) {
      ToastCustom(
        "error",
        "Register user failed!",
        "Error Message",
        "top-right"
      );
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      if (res.data.user === null) {
        setErrors([res.data.error]);
        ToastCustom("error", res.data.message, "Error Message", "top-right");
      } else {
        setUser(res.data.user);
        setIsAuthenticated(true);
        ToastCustom(
          "success",
          res.data.message,
          "Success Message",
          "top-right"
        );
      }
    } catch (error) {
      setErrors([error.response.data.message]);
      ToastCustom("error", "Login failed!", "Error Message", "top-right");
    }
  };

  const logout = async () => {
    try {
      const res = await Logout();
      console.log(res.data.message);
      ToastCustom("info", res.data.message, "Info Message", "top-right");

      setUser(null);
      setIsAuthenticated(false);
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
        signin,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
