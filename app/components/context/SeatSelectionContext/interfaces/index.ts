import { ISeat } from "../../../../interfaces/Travel";

interface IStateSeat {
    seats : ISeat[],
    seatColumns : number
}

//Context
interface IContextSeatData {
    sendInformation : boolean,
    loadingSeatInformation : boolean,
    seatInformation : IStateSeat,
    onPressAccept() : void
}

export {
    IContextSeatData,
    IStateSeat
}