import React from 'react';
import './App.css';
//  import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,Navigate} from "react-router-dom";
import ForgotPassword from './Components/ForgotPassword';
import Login from './Components/Login';
import RegisterPage from './Components/RegisterPage';
import ResetPassword from './Components/ResetPassword';
import ResetPasswordSuccess from './Components/ResetPasswordSuccess';
import WelcomePage from './Components/WelcomePage';

function App() {
  const isLoggedIn = Boolean(localStorage.getItem('token'));
  return (
    <React.Fragment>

    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/forget-password" element={<ForgotPassword/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/reset-password/" element={<ResetPassword/>}/>
      <Route path="/success" element={<ResetPasswordSuccess/>}/>
      <Route path="/welcome-page" element={<WelcomePage/>}/>


    </Routes>



    </React.Fragment>
  );
}

export default App;
