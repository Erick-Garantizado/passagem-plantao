import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading, logout } = useAuth();
  const token = localStorage.getItem('user-token')

  if (loading) return <p>Carregando...</p>;

  if (!token || user?.ativo === false) {
    logout()
    return <Navigate to="/erro" />;
  }

  return children;
}
