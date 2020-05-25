import React , { createContext, Component } from "react";
import Asiento from "../subcomponents/SelectionScreen/subcomponents/Content/subcomponents/Asiento";

interface IFilas {
    id : string,
    disponible : boolean
}

interface IFilasBusData {
    fila_a : IFilas[],
    fila_b : IFilas[]
}

interface IFilasBusState {
    fila_a : JSX.Element[],
    fila_b : JSX.Element[]
}

interface IState {
    filasBus : IFilasBusState,
    asientoSeleccionado : boolean
}

const HomeContext = createContext<any>(null);

class HomeProvider extends Component<{},IState>{
    constructor(props : {}){
        super(props);
        this.state = {
            filasBus : {
                fila_a : [],
                fila_b : []
            },
            asientoSeleccionado : false
        }
    }

    //Al presionar en el Asiento
    onPressImage = (setSeleccion : any) : void => {
        const { asientoSeleccionado } = this.state;

        if(!asientoSeleccionado){
            setSeleccion(true);
            this.setState({ asientoSeleccionado : true });
        }
    }

    //Al presionar en el boton de elegir
    onPressAccept = () : void => {

    }

    //Al presionar en el boton de borrar
    onPressClear = () : void => {
        if(this.state.asientoSeleccionado){
            this.setState({ filasBus : { fila_a : [], fila_b : [] }, asientoSeleccionado : false })
            this.getAsientos();
        }else{
            alert("Selecciona un Asiento Porfavor.");
        }
    }

    //Peticion de la informacion de los asientos
    requestFilasBus = async () : Promise<IFilasBusData> => {
        const data : IFilasBusData = {
            fila_a : [
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : false
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : false
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : false
                },
                {
                    id : "asdsa123d",
                    disponible : true
                }
            ],
            fila_b : [
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : false
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : false
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : false
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : false
                },
                {
                    id : "asdsa123d",
                    disponible : true
                },
                {
                    id : "asdsa123d",
                    disponible : true
                }
            ]
        };

        return data;
    }

    //Crear los Asientos
    filaCreateElement = (dataMap : IFilasBusData) => {
        const { onPressImage } = this;

        this.setState({
            filasBus : {
                fila_a : dataMap.fila_a.map((v,i) => <Asiento onPress={onPressImage} disponible={v.disponible} key={i} />),
                fila_b : dataMap.fila_b.map((v,i) => <Asiento onPress={onPressImage} disponible={v.disponible} key={i} />)
            }
        })
    }

    //Obtener Los Asientos
    getAsientos = async () => {
        const data = await this.requestFilasBus();
        this.filaCreateElement(data);
    }

    UNSAFE_componentWillMount(){
        this.getAsientos();
    }

    render(){
        const { state, onPressImage, onPressClear, onPressAccept } = this;
        const { filasBus } = state;

        return <HomeContext.Provider value={{
            filasBus,
            onPressImage,
            onPressClear,
            onPressAccept
        }}>
            {this.props.children}
        </HomeContext.Provider>
    }
}

export {
    HomeContext,
    HomeProvider
}