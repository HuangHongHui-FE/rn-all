import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {
    return (
        <View>
            <DescTextCom>显示一个圆形的 loading 提示符号。</DescTextCom>
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator />
                <ActivityIndicator size="large" />
                <ActivityIndicator size="small" color="#0000ff" />
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default App;