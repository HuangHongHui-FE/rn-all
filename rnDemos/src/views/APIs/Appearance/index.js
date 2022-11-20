import React, { useState } from "react";
import { View, Text } from 'react-native'
import { Appearance } from 'react-native';
import DescTextCom from '../../../components/DescText'
function App() {

    let [colorScheme, setColorScheme] = useState('')
    colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
        // 用户开启了暗色模式

        // "light"	用户选择了浅色模式。
        // "dark"	用户选择了深色模式。
        // null	用户没有明确选择某种模式。
    }
    return (
        <View>
            <DescTextCom>手机颜色模式</DescTextCom>
            <Text>{colorScheme}</Text>
        </View>
    )
}




export default App;