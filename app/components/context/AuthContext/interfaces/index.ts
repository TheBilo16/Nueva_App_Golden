interface IState {
    isLoading : boolean,
    isLogged : boolean,
    token : string
}

interface IContext extends IState {}

export {
    IState,
    IContext
}