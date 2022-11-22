import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {

    const [count, setCount] = useState(0);

    const onPress = () => {
        setCount(count + 1);
    };

    return (
        <View style={styles.container}>
            <DescTextCom>除非你有一个很好的理由，否则不要用这个组件。所有能够响应触屏操作的元素在触屏后都应该有一个视觉上的反馈（然而本组件没有任何视觉反馈），这也是为什么一个"web"应用总是显得不够"原生"的主要原因之一。</DescTextCom>

            <View style={styles.countContainer}>
                <Text style={styles.countText}>Count: {count}</Text>
            </View>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.button}>
                    <Text>Touch Here</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    countText: {
        color: "#FF00FF"
    }
});

export default App;