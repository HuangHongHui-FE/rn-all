import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";

// import Constants from "expo-constants";
import DescTextCom from '../../../components/DescText'

const randomHexColor = () => {
    return "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
    });
};
const App = () => {
    const [rippleColor, setRippleColor] = useState(randomHexColor());
    const [rippleOverflow, setRippleOverflow] = useState(false);
    return (
        <View style={styles.container}>
            <DescTextCom>本组件用于封装视图，使其可以正确响应触摸操作（仅限 Android 平台）。在 Android 设备上，这个组件利用原生状态来渲染触摸的反馈。</DescTextCom>

            <TouchableNativeFeedback
                onPress={() => {
                    setRippleColor(randomHexColor());
                    setRippleOverflow(!rippleOverflow);
                }}
                background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
            >
                <View style={styles.touchable}>
                    <Text style={styles.text}>TouchableNativeFeedback</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: "#ecf0f1",
        padding: 8
    },
    touchable: { flex: 0.5, borderColor: "black", borderWidth: 1 },
    text: { alignSelf: "center" }
});

export default App;