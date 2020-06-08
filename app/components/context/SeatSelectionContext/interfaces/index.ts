import { ISeat } from "../../../../interfaces/Travel";

interface IStateSeat {
    seats : ISeat[],
    seatColumns : number
}

//Context
interface IContextSeatData {
    seatNumber : number,
    activateSendButton : boolean,
    sendInformation : boolean,
    loadingSeatInformation : boolean,
    seatInformation : IStateSeat,
    onPressAccept() : void,
    updateSeatNumber(id : number) : void
}

export {
    IContextSeatData,
    IStateSeat
}