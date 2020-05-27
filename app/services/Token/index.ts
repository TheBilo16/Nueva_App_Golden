//Extra
import { IUserData } from "../../interfaces/User";
import { JWT_PASSWORD, MESSAGES } from "../../config/Token";

const createToken = (payload : IUserData)  => {
    return JSON.stringify(payload);
}

function verifyTokenExpiration(token : string) : string{
    return MESSAGES.success;
}

export {
    createToken,
    verifyTokenExpiration
}