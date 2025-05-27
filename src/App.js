import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route,Navigate } from 'react-router-dom';
import Login from './login/login';
import Register from './register/register';
import Home from './home/home';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/home" element={<Home />} /> 
      </Routes>
    </div>
    
  );
}

export default App;
