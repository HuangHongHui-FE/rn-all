import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";
import DescTextCom from "../../../components/DescText";

const App = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            // 所有事件
            // 要求成为响应者：
            // onStartShouldSetPanResponder: (evt, gestureState) => true,
            // onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            // onMoveShouldSetPanResponder: (evt, gestureState) => true,
            // onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            // 
            // onPanResponderGrant: (evt, gestureState) => {
            //     // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！

            //     // gestureState.{x,y} 现在会被设置为0
            // },
            // onPanResponderMove: (evt, gestureState) => {
            //     // 最近一次的移动距离为gestureState.move{X,Y}

            //     // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
            // },
            // onPanResponderTerminationRequest: (evt, gestureState) => true,
            // onPanResponderRelease: (evt, gestureState) => {
            //     // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
            //     // 一般来说这意味着一个手势操作已经成功完成。
            // },
            // onPanResponderTerminate: (evt, gestureState) => {
            //     // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            // },
            // onShouldBlockNativeResponder: (evt, gestureState) => {
            //     // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
            //     // 默认返回true。目前暂时只支持android。
            //     return true;
            // },

            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ]
            ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })
    ).current;

    return (
        <View style={styles.container}>
            <DescTextCom>PanResponder类可以将多点触摸操作协调成一个手势。它使得一个单点触摸可以接受更多的触摸操作，也可以用于识别简单的多点触摸手势。</DescTextCom>
            <Text style={styles.titleText}>Drag this box!</Text>
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x }, { translateY: pan.y }]
                }}
                {...panResponder.panHandlers}
            >
                <View style={styles.box} />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "bold"
    },
    box: {
        height: 150,
        width: 150,
        backgroundColor: "blue",
        borderRadius: 5
    }
});

export default App;