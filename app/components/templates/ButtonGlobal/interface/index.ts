interface IStyles{
    width : string,
    height : number,
    fontSize : number,
    paddingVertical : number
}

interface IProps {
    text : string,
    onPress() : void,
    styles_button? : IStyles,
}

export {
    IStyles,
    IProps
}