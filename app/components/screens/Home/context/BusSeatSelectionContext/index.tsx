import React , { createContext, Component, FC, useState, useEffect } from "react";

//Components
import Seat from "../../subcomponents/BusSeatSelection/subcomponents/Content/subcomponents/Seat";

//Extras
import { IStateBusRow, IBusRowData, IContextSeatData } from "./interfaces";

const BusSeatSelectionContext = createContext<Partial<IContextSeatData>>({});

const BusSeatSelectionProvider : FC = (props) : JSX.Element => {
    const [ seatRows , setSeatRows ] = useState<IStateBusRow>();
    const [ selectedSeat , setSelectedSeat ] = useState<boolean>(false);

    // Al presionar en el Asiento
    const onPressImage = (setSelected : any) : void => {
        if(!selectedSeat){
            setSelected(true);
            setSelectedSeat(true);
        }
    }

    //Al presionar en el boton de elegir
    const onPressAccept = () : void => {
    }

    //Al presionar en el boton de borrar
    const onPressClear = () : void => {
        if(selectedSeat){
            setSeatRows({ row_a : [], row_b : [] });
            setSelectedSeat(false);
            getSeats();
        }else{
            alert("Selecciona un Asiento Porfavor.");
        }
    }

    //Peticion de la informacion de los asientos
    const requestBusRows = async () : Promise<IBusRowData> => {
        const data : IBusRowData = {
            row_a : [
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : false
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : false
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : false
                },
                {
                    id : "asdsa123d",
                    available : true
                }
            ],
            row_b : [
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : false
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : false
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : false
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : false
                },
                {
                    id : "asdsa123d",
                    available : true
                },
                {
                    id : "asdsa123d",
                    available : true
                }
            ]
        };

        return data;
    }

    //Crear los Asientos
    const createSeatComponent = (mapData : IBusRowData) => {
        setSeatRows({
            row_a : mapData.row_a.map((v,i) => <Seat onPress={onPressImage} available={v.available} key={i} />),
            row_b : mapData.row_b.map((v,i) => <Seat onPress={onPressImage} available={v.available} key={i} />)
        })

    }

    //Obtener Los Asientos
    const getSeats = async () => {
        const mapData = await requestBusRows();
        createSeatComponent(mapData);
    }

    useEffect(() => {
        getSeats();
    },[])

    return <BusSeatSelectionContext.Provider value={{
        seatRows,
        onPressImage,
        onPressClear,
        onPressAccept
    }}>
        { props.children }
    </BusSeatSelectionContext.Provider>
}

export {
    BusSeatSelectionContext,
    BusSeatSelectionProvider
}