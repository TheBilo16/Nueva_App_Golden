import { useState, useEffect } from "react";
import moment from "moment";

const useTimer = () => {
    const [ time , setTime ] = useState<string>(moment().format("H"));
    
    useEffect(() => {
        setTimeout(() =>{
            setTime(moment().format());
        }, 1000);
    },[time]);

    return { time }
}

export default useTimer;