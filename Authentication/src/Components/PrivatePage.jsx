import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const PrivatePage = ({children}) => {
  
     const{token}=useContext(AuthContext)

    if(!token){
        return <Navigate to={"/login"}/>
    }
 
        return children;
    
}

export default PrivatePage