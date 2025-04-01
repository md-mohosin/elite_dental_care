import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpiner from "../Pages/Shared/LoadingSpiner";

const PrivetRoute = ({ children }) => {

    const { user} = useAuth()

    if (!user) {
        return <Navigate to='/'></Navigate>
    }

    return children
};

export default PrivetRoute;