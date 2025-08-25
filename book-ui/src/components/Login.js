import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BookService from '../service/BookService';

function Login() {
    const [login, setLogin] = useState({
        username : '',
        password : '',
        role : ''
    });
    const service = BookService();
    const navigate = useNavigate();

    const onInputChange = (obj) => {
        setLogin({...login, [obj.target.name] : obj.target.value});
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(login.username.length===0 || login.password.length===0)
            alert("username/password fields must not be empty");
        else{
            service.loginValidate(login).then((response)=>{
                sessionStorage.setItem("role",response.data.role);
                sessionStorage.setItem("loginstatus",true);
                navigate("/getallbooks");
            });
        }
    }
  return (
   <div className="align-items-center container">
        <h1>Login</h1>
        <form >
           <div className="form-group justify-content-center">
            <label>Enter Username</label>
            <input type={"text"} name="username" className="form-control" style={{ width: '250px' }}
                value={login.username} onChange={onInputChange} /> 
            <label>Enter Password</label>
            <input type={"text"} name="password" className="form-control" style={{ width: '250px' }}
                value={login.password} onChange={onInputChange} />    
                    <button className="ui button medium green" onClick={onSubmit}>Login</button>
                 </div>
            </form>
        </div>
  )
};

export default Login;

