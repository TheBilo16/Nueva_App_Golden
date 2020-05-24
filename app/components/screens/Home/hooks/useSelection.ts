import { useState, useEffect, useContext } from "react";
import { AccountContext } from "../../../context/AccountContext";

const useSelection = () => {
    const context = useContext(AccountContext);
    const [ loading , setLoading ] = useState<boolean>(true);
    const [ asientoSeleccionado , setAsientoSeleccionado ] = useState<boolean>(false);

    useEffect(() => {
        //Verificacion de Asiento
        // ...

        setLoading(false);
    },[])

    return {
        loading,
        asientoSeleccionado
    }
}

export default useSelection;