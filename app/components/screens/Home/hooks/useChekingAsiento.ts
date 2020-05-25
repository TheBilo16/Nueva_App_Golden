import { useState, useEffect, useContext } from "react";
import { AccountContext } from "../../../context/AccountContext";

const useChekingAsiento = () => {
    const accountContext = useContext(AccountContext);
    const [ loading , setLoading ] = useState<boolean>(true);
    const [ asientoSeleccionado , setAsientoSeleccionado ] = useState<boolean>(false);

    useEffect(() => {
        //Verificacion de Asiento
        // setAsientoSeleccionado(true);
        setLoading(false);
    },[])

    return {
        loading,
        asientoSeleccionado
    }
}

export default useChekingAsiento;