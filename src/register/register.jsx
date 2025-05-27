import React,{useState} from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [username, setUserName] = useState('');
const [name, setname] = useState('');
const [password, setPassword] = useState('');
const [email, setemail] = useState('');
     const navigate = useNavigate();    
    
    const handleRegisterSubmit = (e) => {
         e.preventDefault();
          console.log('username:', username);
          console.log('Password:', password,e);
    }
     const goToLogin = () => {
        navigate('/login'); 
    };
return (
    <div className="container mt-5 min-vh-100">
            <div className="row justify-content-center align-items-center">
                <div className="col-6">
                    <div className="card">
                <div className="card-header">
                     <h2 className="mb-4">Register</h2>
                </div>
                <div className="card-body">
                     <form onSubmit={handleRegisterSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">User Name</label>
                            <input type="text" className="form-control" id="username"  value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name"  value={name} onChange={(e) => setUserName(e.target.value)} placeholder="Enter username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="eamil" value={email} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <div className="row justify-content-center">
                            <div className="col">
                                <button type="submit" className="btn btn-primary">Register</button>
                                <button type="submit" className="btn btn-warning ms-2" onClick={goToLogin}>Back</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                </div>
            </div>
        </div>
)
};

export default Register