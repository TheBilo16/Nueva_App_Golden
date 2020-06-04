import React , { createContext , FC, useContext , useState , useEffect } from "react";
import { auth, firestore } from "firebase";

//Context
import { UserContext } from "../UserContext";

//Interfaces
import { ISeat } from "../../../interfaces/Travel";
import { TRAVEL, CLIENT } from "../../../config/Private/collections";
import { TypeDocumentData } from "../../../config/types";

interface IContext {
    isLoadingUserInformation : boolean
}

const SeatCheckContext = createContext<Partial<IContext>>({});

const SeatCheckProvider : FC = (props) : JSX.Element => {
    //Context
    const { updateTravelId , updateSeatSelected , updateTravelDestiny } = useContext(UserContext);

    //State
    const [ isLoadingUserInformation , setLoadingUserInformation ] = useState<boolean>(true);

    //Verificar si el Asiento esta Seleccionado
    const requestCheckSeatSelected = (doc : TypeDocumentData) : void => {
        const key = auth().currentUser?.uid;

        if(doc.size == 0){
            alert("Usted no pertenece a ningun Viaje.");
            auth().signOut();
        }else if(doc.size == 1){
            let travelSeats : ISeat[],
                travelId : string = "",
                travelDestiny : string = "";

            doc.forEach((v : TypeDocumentData) => {
                travelSeats = v.data().seats;
                travelDestiny = v.data().destiny;
                updateTravelId!(v.id);
            });

            //Verificar si el usuario tiene un asiento elegido.  
            for(let seat of travelSeats!){
                if(seat.client == key){
                    updateSeatSelected!(true);
                    updateTravelDestiny!(travelDestiny);
                    break;
                }
                
                updateSeatSelected!(false);
                updateTravelDestiny!("");
            }

            setLoadingUserInformation(false);
        }else{
            alert("Error en la verificacion");
            auth().signOut();
        }             
    }

    useEffect(() => {
        const key = auth().currentUser?.uid;
        const ref = firestore().collection(TRAVEL).where(CLIENT,"array-contains",key);
        const eventClients = ref.onSnapshot(requestCheckSeatSelected,console.log);

        return () => eventClients();
    },[]);

    return <SeatCheckContext.Provider value={{ isLoadingUserInformation }}>
        {props.children}
    </SeatCheckContext.Provider>
}

export {
    SeatCheckProvider,
    SeatCheckContext
}