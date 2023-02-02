import * as action_types from './actionTypes';

export const LOGIN_STATE={
    token:"",
    userMail:"",
    isLogged:false,
    error:{}
};
const logout = {...LOGIN_STATE};

export const loginReducer=(state, action)=>{
    switch(action.type){
        case action_types.LOGIN_SUCCESS:
            return{
              ...state,
              token:action.token,
              isLogged:true ,
              error:{} 
            };
        case action_types.LOGIN_FAILED:
            return{
                ...state,
                isLogged:false,
                error:action.error
            };
        case action_types.LOGOUT:
            return{...logout};
        default:
            return state;
    }
}