interface IRow {
    id : string,
    available : boolean
}

interface IBusRowData {
    row_a : IRow[],
    row_b : IRow[]
}

interface IStateBusRow {
    row_a : JSX.Element[],
    row_b : JSX.Element[]
}

//Context
interface IContextSeatData {
    seatRows : IStateBusRow,
    onPressImage(setSelected : any) : void,
    onPressClear() : void,
    onPressAccept() : void
}

//State
interface IState {
    seatRows : IStateBusRow,
    selectedSeat : boolean
}

export {
    IBusRowData,
    IContextSeatData,
    IState,
    IStateBusRow
}