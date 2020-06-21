interface IDocumentImage {
    name : string,
    url : string
}

//Payload del usuario
interface IUserInformation {
    code : string,
    dni : string,
    email : string,
    password : string,
    phone : string,
    profileImage : string,
    documentImage : IDocumentImage,
    fullName : string,
    city : string
}

export {
    IUserInformation
}