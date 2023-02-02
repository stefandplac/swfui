import { useState,useContext } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

//constants imports
import * as constants from '../constants/constants';
import * as action_types from '../actionTypes';

//components imports
import { ContainerBox as Container } from "../components/ContainerBox";
import { InputFieldLoginRegister as InputContainer } from "../components/inputFieldLoginRegister";

//context import
import {LoginContext} from '../context/LoginContext';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error,setError]=useState({});

  const loginContext = useContext(LoginContext);

  const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let requestBody = JSON.stringify({Name:name, Email:email, Password:password});
            let response= await axios.post(constants.REGISTER_URL, requestBody, constants.LOGIN_HEADERS);
            console.log(response.data);
            //update state with token
            loginContext.dispatchLoginState({
                type:action_types.LOGIN_SUCCESS,
                token:response.data.token
            });
        }
        catch(err){
            console.log(err);
            setError(err);
        

        }
  };
  return (
    <Container>
      <h1>Register page</h1>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="nameInput">Name </label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="emailInput">Email </label>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="passwordInput">Password </label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputContainer>

        <InputContainer>
          <button>Register</button>
          <Link to="/login">Login</Link>
        </InputContainer>
        <span className="text-center text-danger">{error?.message}</span>
      </form>
    </Container>
  );
};
export default Register;
