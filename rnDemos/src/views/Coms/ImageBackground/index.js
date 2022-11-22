import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import DescTextCom from '../../../components/DescText'

const image = { uri: "https://zh-hans.reactjs.org/logo-og.png" };
const App = () => {
    return (
        <View style={styles.container}>
            <DescTextCom>添加描述</DescTextCom>

            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.text}>Inside</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        background: "#000000a0"
    }
});

export default App;