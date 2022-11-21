import React from "react";
import { View, Button, Text, StyleSheet, Systrace } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {
    const enableProfiling = () => {
        Systrace.setEnabled(true); // Call setEnabled to turn on the profiling.
        Systrace.beginEvent('event_label')
        Systrace.counterEvent('event_label', 10);
    }

    const stopProfiling = () => {
        Systrace.endEvent()
    }
    return (
        <View style={styles.container}>
            <DescTextCom>Systrace是一个标准的基于 Android 标记的分析工具（在安装 Android 平台工具包时安装）。配置文件代码块被开始/结束标记包围，然后以彩色图表格式可视化。Android SDK 和 React Native 框架都提供了您可以可视化的标准标记。</DescTextCom>
            <Text style={[styles.header, styles.paragraph]}>React Native Systrace API</Text>
            <Button title="在EasyProfiler中捕获非定时JS事件" onPress={() => enableProfiling()} />
            <Button title="Stop capturing" onPress={() => stopProfiling()} color="#FF0000" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 44,
        padding: 8
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    paragraph: {
        margin: 24,
        textAlign: "center"
    }
});

export default App;