interface IStyles{
    width : string,
    height : number,
    fontSize : number,
    paddingVertical : number
}

interface IProps {
    text : string,
    action() : any,
    styles_button? : IStyles,
}

export {
    IStyles,
    IProps
}