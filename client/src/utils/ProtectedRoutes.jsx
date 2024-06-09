import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({children}) => {
    return localStorage.getItem("role") === "admin" ? children : <Navigate to = "/login"/>; 
}

export default ProtectedRoutes
