import React,{useState,useEffect} from "react";
import { getUserById } from "../services/userService"; 
import { useNavigate } from "react-router-dom";

const Home = () =>{
     const [user, setUser] = useState(null);
      const navigate = useNavigate();
    useEffect(() => {
        const id = localStorage.getItem('id')
        getUserById(id).then((res) =>{
            console.log(res);
            setUser(res.data)
        })
    },[])
    const Logout = () => {
        navigate('/login'); 
    };
    return(
        <div>
      <h1>User Profile</h1>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button className="btn btn-primary" onClick={Logout}>Logout</button>
          {/* Add more fields as needed */}
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    )
}
export default Home