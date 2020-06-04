import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import GradientButton from "react-native-gradient-buttons";

//Extra
import { Base , Secondary  } from "../../../config/colors";
import { IProps } from "./interface";

const ButtonGlobal : FC<IProps> = (props) : JSX.Element => {
    const { styles_button, text, children, onPress } = props;
    const style = StyleSheet.create({
        container_button : {
            width : "100%",
            alignItems : "center",
            paddingVertical : styles_button?.paddingVertical,
        },
        button :{
            width : styles_button?.width,
            height : styles_button?.height,
            borderBottomColor : Secondary.borders,
            borderBottomWidth : 3,
        },
        text : {
            fontSize : styles_button?.fontSize,
            fontWeight : "bold"
        }
    })

    return <View style={style.container_button}>
        {children}
        <>
            <GradientButton 
                gradientBegin={Base.yellow} 
                gradientEnd={Base.orange}
                text={text}
                style={style.button}
                radius={0}
                textStyle={style.text}
                gradientDirection="vertical"
                onPressAction={onPress}
            />
        </>
    </View>
}

ButtonGlobal.defaultProps = {
    styles_button : {
        width : "65%",
        height : 45,
        fontSize : 16,
        paddingVertical : 10
    },
    text : "Default Text"
}

export default ButtonGlobal;