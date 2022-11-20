import React, { useState, useEffect } from "react";
import {
    Alert,
    Animated,
    InteractionManager,
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native";

import DescTextCom from '../../../components/DescText'
// 根据平台展示不同的文字
const instructions = Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android:
        "Double tap R on your keyboard to reload,\n" +
        "Shake or press menu button for dev menu",
});

const useMount = func => useEffect(() => func(), []);

const useFadeIn = (duration = 5000) => {
    const [opacity] = useState(new Animated.Value(0));

    // 安装组件时运行动画
    useMount(() => {
        // Animated.timing() create a interaction handle by default, if you want to disabled that
        // 您可以将isInteraction设置为false以禁用该行为。
        Animated.timing(opacity, {
            toValue: 1,
            duration,
            useNativeDriver: true
        }).start();
    });

    return opacity;
};

const Ball = ({ onShown }) => {
    const opacity = useFadeIn();

    // Running a method after the animation
    useMount(() => {
        const interactionPromise = InteractionManager.runAfterInteractions(() => onShown());
        return () => interactionPromise.cancel();
    });

    return <Animated.View style={[styles.ball, { opacity }]} />;
};

const App = () => {
    return (
        <View style={styles.container}>
            <DescTextCom>Interactionmanager 可以将一些耗时较长的工作安排到所有互动或动画完成之后再进行。这样可以保证 JavaScript 动画的流畅运行。</DescTextCom>
            <Text>{instructions}</Text>
            <Ball onShown={() => Alert.alert("Animation is done")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    ball: {
        width: 100,
        height: 100,
        backgroundColor: "salmon",
        borderRadius: 100,
    },
});

export default App;