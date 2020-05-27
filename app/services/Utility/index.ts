import { Alert } from "react-native";
import { 
    MESSAGE_LOGOUT, 
    MESSAGE_LOGOUT_OK, 
    MESSAGE_LOGOUT_CANCEL 
} from "../../config/system";

function logoutMessage(_clearAccountUser : Function) : void {
    Alert.alert("",MESSAGE_LOGOUT,[
        { text : MESSAGE_LOGOUT_OK, onPress : () => _clearAccountUser()},
        { text : MESSAGE_LOGOUT_CANCEL }
    ]);
}

export {
    logoutMessage
}