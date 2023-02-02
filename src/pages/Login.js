import { useState, useContext } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

//context import
import {LoginContext} from '../context/LoginContext';

//import  constants
import * as constants from '../constants/constants';

//import action types
import * as action_types from '../actionTypes';

//components imports
import { ContainerBox as Container } from "../components/ContainerBox";
import {InputFieldLoginRegister as InputContainer} from '../components/inputFieldLoginRegister';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword]=useState("");

  const loginContext = useContext(LoginContext);

  const handleChange=(e)=>{
    e.target.name==="emailInput" ? setEmail(e.target.value) : setPassword(e.target.value);
  }
  const handleSubmit =async (e) => {
        e.preventDefault();
        try{
            let requestBody = JSON.stringify({Email:email, Password:password});
            let response=await axios.post(`${constants.LOGIN_URL}`,requestBody, constants.LOGIN_HEADERS);
            console.log(response.data);
            //update state
            loginContext.dispatchLoginState({
                type:action_types.LOGIN_SUCCESS,
                token:response.data.token
            });
        }
        catch(err){
            console.log(err);
            loginContext.dispatchLoginState({
                type:action_types.LOGIN_FAILED,
                error:err
            });
        };
  };
  return (
    <Container>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <InputContainer>
          <label htmlFor="emailInput">E-mail </label>
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            
            name="emailInput"
          />
        </InputContainer>
        <InputContainer>
            <label htmlFor="passwordInput">Password </label>
            <input 
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="passwordInput"
            
            />
        </InputContainer>
        <InputContainer>
            <button >Login</button>
            <Link to="/register">Register</Link>
        </InputContainer>
        <span className="text-center text-danger">{loginContext.loginState.error?.message}</span>
      </form>
    </Container>
  );
};
export default Login;
