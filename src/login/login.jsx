import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { getUsers,getUserById } from "../services/userService";
import Home from "../home/home";
import '../login/login.css';
import '../index.css';

const Login = () =>{
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
     const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        // e.preventDefault();
        if(username && password){
            getUserById(username)
            .then((res) => {
                console.log('Users:', res.data)
                if(password == res.data.password){
                    localStorage.setItem('id',res.data.id);
                    navigate('/home')
                }
            })
            .catch((err) => console.error('Error:', err));
            e.preventDefault();
        }
          
    }
     const goToRegister = () => {
        navigate('/register'); 
    };
    return(
        <div className="login-page min-vh-100">
        <div className="container pt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-6">
                    <div className="card">
                <div className="card-header">
                     <h2>Login</h2>
                </div>
                <div className="card-body">
                     <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="emusernameail" className="form-label">User Name</label>
                            <input type="text" className="form-control" id="username"  value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter username" />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <div className="row justify-content-center">
                            <div className="col">
                                <button type="submit" className="btn btn-primary">Login</button>
                                <button type="button" className="btn btn-warning ms-2" onClick={goToRegister}>Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login