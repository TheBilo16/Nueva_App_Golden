interface IProps {}
interface IState {
    isLoading : boolean,
    isLogged : boolean,
    userId : string
}

interface IContext extends IState {
    _isLogged?() : Promise<void>,
    _clearAccountUser?() : Promise<void>,
    _refreshScreen?() : void
}

export {
    IProps,
    IState,
    IContext
}