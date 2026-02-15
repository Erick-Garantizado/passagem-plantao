// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem("user-token");
    setUser(null);
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("user-token")
      
      if (!token) {
        setUser(null)
        setLoading(false)
        return
      }

      try {
        const { data } = await api.get("plantao/usuario/atual", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        setUser(data?.usuario ?? null);
      } catch {
        logout()
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
