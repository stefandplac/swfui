
export const RoastDay=(props)=>{
    const options = { weekday: "long", year: "numeric", month: "short" };
    const today = new Date();
    const weekDay = new Date(props.el.weekDayDate);
    
    const todayStyle= today.getMonth()==weekDay.getMonth() && today.getDate()==weekDay.getDate() ? "text-danger bg-dark" : "bg-light";

    return(
        <div className={`d-flex justify-content-between p-2 border ${todayStyle}`}>
             <div className="align-self-center" style={{width:"300px"}}>
                {new Date(props.el.weekDayDate).toDateString()}
            </div>
            <div className="container d-flex flex-column ">
                <div>
                    <span>Morning shift: </span>
                    {props.el.morningShiftEngineer}</div>
                <div>
                    <span>Evening shift: </span>
                    {props.el.eveningShiftEngineer}</div>
            </div>
        </div>
    );

}