import {createContext,useReducer} from 'react';
import {loginReducer, LOGIN_STATE} from '../loginReducer';

export const LoginContext = createContext();

export const LoginProvider = ({children})=>{
    const [loginState, dispatchLoginState]=useReducer(loginReducer, LOGIN_STATE);
    return(
        <LoginContext.Provider value={{loginState:loginState, dispatchLoginState: dispatchLoginState}}>
            {children}
        </LoginContext.Provider>
    );
}
