import React, { useState } from "react";
import { View, StyleSheet, Button, Alert, Text } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {
    const createTwoButtonAlert = () =>
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    const createThreeButtonAlert = () =>
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Ask me later",
                    onPress: () => console.log("Ask me later pressed")
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

    const showAlert = () =>
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            }
        );

    return (
        <View style={styles.container}>
            <DescTextCom>弹窗</DescTextCom>
            <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
            <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
            <Button title="Show alert" onPress={showAlert} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    }
});

export default App;