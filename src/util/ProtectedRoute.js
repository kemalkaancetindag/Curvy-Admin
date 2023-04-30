import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {

    const user = localStorage.getItem("user");
    
    if (!user && window.location.pathname !== "/login") {
        
        return <Navigate to="/login" replace />;
    }
    
    if(window.location.pathname === "/login") {
        
        if(user) {
            return <Navigate to="/" replace />;      
        } else {
            return children;
        }
    }


    return children;
};

export default ProtectedRoute