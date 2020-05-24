import React, { FC } from "react";
import { Text } from "react-native";
import { IPropsList } from "../../interface";
import Asiento from "../Asiento";

const ListaAsientos : FC<IPropsList> = (props) : JSX.Element => {
    const { list } = props;

    return <>
        {
            list.map((v,i) => <Asiento key={i} disponible={v.disponible} />)
        }
    </>
}

export default React.memo(ListaAsientos);