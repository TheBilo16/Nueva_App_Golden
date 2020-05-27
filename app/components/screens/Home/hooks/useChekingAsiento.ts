import { useState, useEffect, useContext } from "react";
import { AccountContext } from "../../../context/AccountContext";

const useChekingAsiento = () => {
    const { } = useContext(AccountContext);
    const [ loading , setLoading ] = useState<boolean>(true);
    const [ seatSelected , setSeatSelected ] = useState<boolean>(false);

    useEffect(() => {
        //Verificacion de Asiento
        // setSeatSelected(true);
        setLoading(false);
    },[])

    return {
        loading,
        seatSelected
    }
}

export default useChekingAsiento;