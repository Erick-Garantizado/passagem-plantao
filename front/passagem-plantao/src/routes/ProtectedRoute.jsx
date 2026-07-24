import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingScreen from "../components/LoadingScreen";

export default function ProtectedRoute({ children }) {
  const { user, loading, logout } = useAuth();
  const token = localStorage.getItem('user-token')

  //if (loading) return <p>Carregando...</p>;

  if (loading) return <LoadingScreen open={loading} />

  if (!token || user?.ativo === false) {
    logout()
    return <Navigate to="/erro" />;
  }

  return children;
}
