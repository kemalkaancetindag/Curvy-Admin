import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ user, children }) => {
    
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