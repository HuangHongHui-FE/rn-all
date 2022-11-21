import React from "react";
import { Text, StyleSheet, useColorScheme, View } from 'react-native';
import DescTextCom from '../../../components/DescText'
const App = () => {
    const colorScheme = useColorScheme();
    return (
        <View style={styles.container}>
            <DescTextCom>useColorSchemeReact hook 提供并订阅来自Appearance模块的配色方案更新。返回值指示当前用户首选的配色方案。稍后可以通过直接用户操作（例如设备设置中的主题选择）或按计划（例如遵循昼/夜循环的明暗主题）更新该值。</DescTextCom>
            <Text>useColorScheme(): {colorScheme}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default App;