import React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {
    const window = useWindowDimensions();
    return (
        <View>
            <DescTextCom>useWindowDimensions会在屏幕尺寸变化时自动更新获取到的设备width和height价值。</DescTextCom>
            <Text>{`Window Dimensions: height - ${window.height}, width - ${window.width}, scale - ${window.scale}, fontScale - ${window.fontScale}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default App;