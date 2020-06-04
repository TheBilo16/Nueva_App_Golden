import { IUserInformation } from "../../../../interfaces/User";

interface IState {
    travelId : string,
    seatSelected : boolean,
    userInformation : IUserInformation,
    travelDestiny : string
}

interface IContext extends IState {
    updateTravelDestiny(vañie : string) : void
    updateSeatSelected(value : boolean) : void
    updateTravelId(value : string) : void
}

export default IContext;