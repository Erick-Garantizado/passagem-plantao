import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const autenticado = localStorage.getItem("auth");

  if (!autenticado) {
    return <Navigate to="/erro" />; // página de erro
  }

  return children;
}
