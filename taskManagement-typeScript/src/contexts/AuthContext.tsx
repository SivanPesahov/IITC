import api from "@/services/api.service";
import { useLocalStorage } from "@uidotdev/usehooks";
import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export interface User {
  username: String;
  email: String;
  password: String;
  firstName: String;
  lastName: String;
}

type loggedInUserStateType = User | null | undefined;

interface AuthContextType {
  loggedInUser: loggedInUserStateType;
  login: (user: { username: string; password: string }) => void;
  logout: () => void;
  register: (userData: User) => void;
  fetchUser: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedInUser, setLoggedInUser] =
    useState<loggedInUserStateType>(undefined);
  const [token, setToken] = useLocalStorage("jwt-taskify", null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setLoggedInUser(null);
      return;
    }

    fetchUser();
  }, [token]);

  async function fetchUser() {
    try {
      const response = await api.get("/auth/loggedInUser");
      setLoggedInUser(response.data);
    } catch (error: any) {
      if (error.response?.status === 401) {
        console.error("Invalid token, logging out");
        logout();
      } else if (error.response?.status === 404) {
        console.error("User not found, logging out");
        logout();
      } else {
        console.error("Error fetching user data:", error);
      }
    }
  }

  function logout() {
    setToken(null);
    setLoggedInUser(null);
  }

  async function login(userData: { username: string; password: string }) {
    try {
      const response = await api.post("/auth/login", userData);
      setToken(response.data.token);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  async function register(userData: User) {
    try {
      const response = await api.post("/auth/register", userData);
      setToken(response.data.token);
    } catch (error) {
      console.error("Error registering:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ loggedInUser, login, register, logout, fetchUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
}

export default AuthContext;
