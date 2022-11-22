import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {
    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = '';
    if (timesPressed > 1) {
        textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
        textLog = 'onPress';
    }
    return (
        <View style={styles.container}>
            <DescTextCom>Pressable 是一个核心组件的封装，它可以检测到任意子组件的不同阶段的按压交互情况。</DescTextCom>
            <Pressable
                onPress={() => {
                    setTimesPressed((current) => current + 1);
                }}
                android_ripple={{
                    color: '#f08080',
                    borderless: false,
                    // radius: 100%
                }}
                delayLongPress={2000}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'white'
                    },
                    styles.wrapperCustom
                ]}>
                {({ pressed }) => (
                    <Text style={styles.text}>
                        {pressed ? 'Pressed!' : 'Press Me'}
                    </Text>
                )}
            </Pressable>
            <View style={styles.logBox}>
                <Text testID="pressable_press_console">{textLog}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 16
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9'
    }
});

export default App;