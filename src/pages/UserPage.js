import { useContext } from "react";

//action types import
import * as action_types from "../actionTypes";

//components imports
import { LoginContext } from "../context/LoginContext";
import { ContainerBox as Container } from "../components/ContainerBox";
import {Roast} from '../components/Roast';

const UserPage = () => {
  const loginContext = useContext(LoginContext);
  const handleLogout = () => {
    loginContext.dispatchLoginState({
      type: action_types.LOGOUT,
    });
  };
  return (
    <Container>
      <div className="d-flex justify-content-end gap-3 w-50 ">
        <h4 >2 Weeks Schedule</h4>
        <button onClick={handleLogout} className="mr-5 rounded">Logout</button>
      </div>
      <div>
        
        <Roast/>
      </div>
    </Container>
  );
};
export default UserPage;
