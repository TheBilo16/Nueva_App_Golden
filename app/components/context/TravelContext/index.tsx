import React , { createContext, FC, useEffect, useState } from "react";
import { firestore, auth } from "firebase";

//Interfaces
import { ITravelData } from "../../../interfaces/Travel";
import { TypeDocumentData } from "../../../config/types";

interface IContext {
    loadingTravelData : boolean,
    travelData : ITravelData
}

const TravelContext = createContext<Partial<IContext>>({});

const TravelProvider : FC = (props) : JSX.Element => {
    //State
    const [ loadingTravelData , setLoadingTravelData ] = useState<boolean>(true);
    const [ travelData , setTravelData ] = useState<ITravelData>();

    //Event
    var eventTravel : any = null,
        eventBusStop : any = null;

    const requestTravelData = async () : Promise<void> => {
        try{
            const uid = auth().currentUser?.uid;
            const travel = await firestore().collection("travel").where("clients","array-contains",uid).get();
            var travelDestiny : string = "",
                travelBusStop : any = [];

            if(travel.size > 0){
                travel.forEach((v : TypeDocumentData) => {
                    travelDestiny = v.data().destiny;
                    travelBusStop = v.data().busStop;
                });

                //Check travel data
                eventTravel = firestore().collection("location").doc(travelDestiny).onSnapshot((location : TypeDocumentData) => {
                    if(location.exists){
                        setTravelData(location.data());
                        setLoadingTravelData(false);
                    }
                })

                // //Check bus stop
                // travelBusStop.forEach(async v => {
                //     const data = await firestore().collection("busStop").doc(v).get();

                // })
                
            }else{
                
            }
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        requestTravelData();

        return eventTravel ? eventTravel : () => {};
    },[])

    return <TravelContext.Provider value={{ travelData , loadingTravelData }}>
        { props.children }
    </TravelContext.Provider>
}

export {
    TravelProvider,
    TravelContext
}