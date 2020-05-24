import { useState, useEffect } from "react";
import { IPropsContent } from "../interface";

const useContent = () => {
    const [ filas , setFilas ] = useState<IPropsContent>({
        fila_a : [],
        fila_b : []
    });

    useEffect(() => {
        setFilas({
            fila_a : [
                {
                    idAsiento : "a1s5d",
                    disponible : true
                },
                {
                    idAsiento : "a1s5d",
                    disponible : false
                }
            ],
            fila_b : [
                {
                    idAsiento : "a1s5d",
                    disponible : true
                },
                {
                    idAsiento : "a1s5d",
                    disponible : false
                }
            ]
        })
    },[]);

    return {
        filas
    }
}

export default useContent;