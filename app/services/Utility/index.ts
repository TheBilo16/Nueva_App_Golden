import { Alert } from "react-native";
import { auth } from "firebase";
import { 
    MESSAGE_LOGOUT, 
    MESSAGE_LOGOUT_OK, 
    MESSAGE_LOGOUT_CANCEL 
} from "../../config/system";

const messageLogOut = () : void => {
    Alert.alert("",MESSAGE_LOGOUT,[
        { text : MESSAGE_LOGOUT_OK, onPress : () => auth().signOut() },
        { text : MESSAGE_LOGOUT_CANCEL }
    ]);
}

export {
    messageLogOut
}