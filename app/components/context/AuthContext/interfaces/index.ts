interface IState {
    isLoading : boolean,
    authenticateUser : boolean
}

interface IContext extends IState {}

export {
    IState,
    IContext
}