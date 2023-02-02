import {useState, useContext, useEffect} from 'react';
import axios from 'axios';

//constants imports
import * as constants from '../constants/constants';

//context import
import {LoginContext} from '../context/LoginContext';
import {RoastDay} from './RoastDay';

export const Roast=()=>{
    const [roastDays, setRoastDays]=useState([]);
    const [loaded,setLoaded] = useState(false);
    const loginContext = useContext(LoginContext);
    const [error,setError]=useState({});

    const fetchData=async ()=>{
        try{
            let configHeaders = {
                                headers:{
                                    ...constants.LOGIN_HEADERS.headers,
                                    'Authorization':`Bearer ${loginContext.loginState.token}`
                                } };
            let response = await axios.get(constants.GET_ROAST_URL,configHeaders);
            //update state
            setRoastDays(response.data);
            setLoaded(true);
        }
        catch(err){
            console.log(err);
            setError(err);
           
        }
    };
    useEffect(()=>{
        fetchData();
        
        return ()=>{
            //cleaning function when component will unmount
            setRoastDays([]);
            setError({});
        }
    },[])
    return(
        <div className="container d-flex h-100 w-100 pt-4 flex-column" >
            {loaded ? (
                <div  >
                    {roastDays.map((el, index)=>(
                        <RoastDay key={index} el={el}/>
                    ))}
                </div>
            ):(
                <span className="text-danger text-center">
                    {error?.message}
                </span>

            )}
            
        </div>
    );
}