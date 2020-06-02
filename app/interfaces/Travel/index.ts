interface ISeat {
    available : boolean,
    name : string
}

interface ITravelData {
    name : string,
    image : string,
    description : string,
    region : string,
    coords : any
}

export {
    ISeat,
    ITravelData
}