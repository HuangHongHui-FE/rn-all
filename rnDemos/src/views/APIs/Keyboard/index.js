import React, { useEffect } from "react";
import { Keyboard, TextInput, StyleSheet, View } from "react-native";

import DescTextCom from '../../../components/DescText'
const Example = () => {
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {
        alert("Keyboard Shown");
    };

    const _keyboardDidHide = () => {
        alert("Keyboard Hidden");
    };

    return (
        <View>
            <DescTextCom>用来控制键盘相关的事件</DescTextCom>
            <TextInput style={s.input} placeholder='Click here ...' onSubmitEditing={Keyboard.dismiss} />
        </View>
    );
}

const s = StyleSheet.create({
    input: {
        margin: 60,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 4,
        backgroundColor: "#fff"
    }
})

export default Example;