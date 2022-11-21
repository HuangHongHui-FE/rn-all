import React, { useState, useEffect } from "react";
import { View, StyleSheet, ToastAndroid, Button, StatusBar } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {
    const showToast = () => {
        ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
    };

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
            "All Your Base Are Belong To Us",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    };

    const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
            "A wild toast appeared!",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    };


    const Toast = ({ visible, message }) => {
        if (visible) {
            ToastAndroid.showWithGravityAndOffset(
                message,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
            );
            return null;
        }
        return null;
    };

    const [visibleToast, setvisibleToast] = useState(false);

    useEffect(() => setvisibleToast(false), [visibleToast]);

    const handleButtonPress = () => {
        setvisibleToast(true);
    };

    return (
        <View style={styles.container}>
            <DescTextCom>将原生的 ToastAndroid 模块导出为一个 JS 模块，用于在 Android 设备上显示一个悬浮的提示信息。</DescTextCom>
            <Button title="Toggle Toast" onPress={() => showToast()} />
            <Button
                title="Toggle Toast With Gravity"
                onPress={() => showToastWithGravity()}
            />
            <Button
                title="Toggle Toast With Gravity & Offset"
                onPress={() => showToastWithGravityAndOffset()}
            />

            <Toast visible={visibleToast} message="Example" />
            <Button title="Toggle Toast" onPress={() => handleButtonPress()} />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#888888",
        padding: 8
    }
});

export default App;