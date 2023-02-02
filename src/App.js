import {useContext} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

//import components
import Login from './pages/Login';
import Register from './pages/Register';
import UserPage from './pages/UserPage';

import {LoginContext} from './context/LoginContext';


const App=()=>{
    const loginContext= useContext(LoginContext);
    return(
        <div className="w-100 h-100">
        {!loginContext.loginState.isLogged ? (
            <Routes>
                <Route path="/*" element={<Navigate to="/login"/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>}/>
            </Routes>
        ):(
            <Routes>
                <Route path="/*" element={<Navigate to="/main"/>}/>
                <Route path="/main" element={<UserPage/>}/>
            </Routes>
        )}
        </div>
    );
}
export default App;