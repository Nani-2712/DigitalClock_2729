import React,{useState, useEffect} from "react"

function Clock(){

    const[time,setTime]=useState(new Date());
    //useEffect(function,[dependencies]);
    function updateTime(){
        setTime(new Date());
    }
    useEffect(()=>{
        const intervalId=setInterval(updateTime,1000);
    
        return()=>{
            clearInterval(intervalId);
        }
    
    },[])

    function padzero(number){
        if(number<10)return "0"+number;
        
        return number;
    }
    function formatTime(){
        let hour=time.getHours();
        const min=time.getMinutes();
        const sec=time.getSeconds();
        const meridian=(hour>=12 ? "PM":"AM");
        hour=hour%12;
        if(hour==0)hour=12;

        return `${padzero(hour)}:${padzero(min)}:${padzero(sec)} ${padzero(meridian)}`;
    }
  return(
    <div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>

    </div>
  )
}

export default Clock