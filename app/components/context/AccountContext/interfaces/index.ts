interface IState {
    isLoading : boolean,
    isLogged : boolean,
    token : string
}

interface IContext extends IState {
    _isLogged() : Promise<void>,
    _clearAccountUser() : Promise<void>,
    _refreshScreen() : void,
    _endLoading() : void
}

export {
    IState,
    IContext
}