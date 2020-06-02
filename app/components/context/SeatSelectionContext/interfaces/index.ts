import { ISeat } from "../../../../interfaces/Travel";

//Context
interface IContextSeatData {
    seatRows : ISeat[],
    selectedSeat : boolean,
    loadingInformation : boolean,
    updateSelectedSeat(value : boolean) : void,
    onPressAccept() : void
}


export {
    IContextSeatData,
}