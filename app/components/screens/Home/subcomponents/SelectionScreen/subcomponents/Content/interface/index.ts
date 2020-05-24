interface IAsiento {
    idAsiento : string
    disponible : boolean
}

interface IPropsContent {
    fila_a : IAsiento[],
    fila_b : IAsiento[]
}

interface IPropsList {
    list : IAsiento[]
}

export {
    IPropsContent,
    IPropsList,
    IAsiento
}