import React, { useEffect } from "react";
import { Text, View, StyleSheet, BackHandler, Alert } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to go back?", [
                {
                    text: "Cancel",
                    onPress: () => {
                        console.log('取消返回');
                    },
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);



    // const backAction2 = () => {
    //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
    //         {
    //             text: "Cancel",
    //             onPress: () => null,
    //             style: "cancel"
    //         },
    //         { text: "YES", onPress: () => BackHandler.exitApp() }
    //     ]);
    //     return true;
    // };

    // useEffect(() => {
    //     BackHandler.addEventListener("hardwareBackPress", backAction2);

    //     return () =>
    //         BackHandler.removeEventListener("hardwareBackPress", backAction2);
    // }, []);


    
    return (
        <View style={styles.container}>
            <DescTextCom>用于监听设备上的后退按钮事件，可以调用你自己的函数来处理后退行为。此 API 仅能在 Android 上使用。</DescTextCom>

            <Text style={styles.text}>Click Back button!</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
});


export default App;