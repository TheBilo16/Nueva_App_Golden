import React , { createContext, Component } from "react";

//Components
import Seat from "../../subcomponents/BusSeatSelection/subcomponents/Content/subcomponents/Seat";

//Extras
import { IState, IBusRowData, IContextSeatData } from "./interfaces";


const BusSeatSelectionContext = createContext<Partial<IContextSeatData>>({});

class BusSeatSelectionProvider extends Component<{},IState>{
    constructor(props : {}){
        super(props);
        this.state = {
            seatRows : {
                row_a : [],
                row_b : []
            },
            selectedSeat : false
        }
    }

    //Al presionar en el Asiento
    onPressImage = (setSelected : any) : void => {
        const { selectedSeat } = this.state;

        if(!selectedSeat){
            setSelected(true);
            this.setState({ selectedSeat : true });
        }
    }

    //Al presionar en el boton de elegir
    onPressAccept = () : void => {
    }

    //Al presionar en el boton de borrar
    onPressClear = () : void => {
        const { selectedSeat } = this.state;

        if(selectedSeat){
            this.setState({ seatRows : { row_a : [], row_b : [] }, selectedSeat : false })
            this.getSeat();
        }else{
            alert("Selecciona un Asiento Porfavor.");
        }
    }

    //Peticion de la informacion de los asientos
    requestBusRows = async () : Promise<IBusRowData> => {
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
    createSeatComponent = (mapData : IBusRowData) => {
        const { onPressImage } = this;

        this.setState({
            seatRows : {
                row_a : mapData.row_a.map((v,i) => <Seat onPress={onPressImage} available={v.available} key={i} />),
                row_b : mapData.row_b.map((v,i) => <Seat onPress={onPressImage} available={v.available} key={i} />)
            }
        })
    }

    //Obtener Los Asientos
    getSeats = async () => {
        const mapData = await this.requestBusRows();
        this.createSeatComponent(mapData);
    }

    UNSAFE_componentWillMount(){
        this.getSeats();
    }

    render(){
        const { state, props, onPressImage, onPressClear, onPressAccept } = this;
        const { children } = props;
        const { seatRows } = state;

        return <BusSeatSelectionContext.Provider value={{
            seatRows,
            onPressImage,
            onPressClear,
            onPressAccept
        }}>
            {children}
        </BusSeatSelectionContext.Provider>
    }
}

export {
    BusSeatSelectionContext,
    BusSeatSelectionProvider
}