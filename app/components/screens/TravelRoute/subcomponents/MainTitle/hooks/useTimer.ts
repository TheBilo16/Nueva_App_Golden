import { useState, useEffect } from "react";
import moment from "moment";

const useTimer = () => {
    const [ time , setTime ] = useState<string>(moment().format("HH:mm:ss"));
    
    useEffect(() => {
        setTimeout(() =>{
            setTime(moment().format("HH:mm:ss"));
        }, 1000);
    },[time]);

    return { time }
}

export default useTimer;