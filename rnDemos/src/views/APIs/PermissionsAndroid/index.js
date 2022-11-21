import React from "react";
import { StyleSheet, Text, View, SafeAreaView, PermissionsAndroid, Button } from "react-native";
// import Constants from "expo-constants";
import DescTextCom from '../../../components/DescText'


const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "Cool Photo App Camera Permission",
                message:
                    "Cool Photo App needs access to your camera " +
                    "so you can take awesome pictures.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
        } else {
            console.log("Camera permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
};
const App = () => {
    return (

        <View style={styles.container}>
            <View>
                <DescTextCom>PermissionsAndroid 可以访问 Android M(也就是 6.0)开始提供的权限模型。有一些权限写在AndroidManifest.xml就可以在安装时自动获得，但有一些“危险”的权限则需要弹出提示框供用户选择。本 API 即用于后一种情形。

                    在低于 Android 6.0 的设备上，权限只要写在AndroidManifest.xml里就会自动获得，此情形下check会始终返回true和而request方法将始终解析为PermissionsAndroid.RESULTS.GRANTED。

                    如果用户之前拒绝过你的某项权限请求，那么系统会建议你显示一个为什么需要这个权限的“详细解释”（rationale参数）。如果用户之前拒绝过，那么当你再次申请的时候，弹出的就可能不是原先的申请信息，而是rationale参数里提供的进一步解释。</DescTextCom>
            </View>
            <Button title="request permissions" onPress={requestCameraPermission} />
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
    item: {
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    }
});
export default App;