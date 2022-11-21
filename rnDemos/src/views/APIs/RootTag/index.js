import React from "react";
import { View } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {
    return (
        <View>
            <DescTextCom>RootTag 是用于标记 React Native 原生根视图层的不透明标识符（opaque identifier）。具体来说就是 ReactRootView(android) 或是 RCTRootView(iOS) 的实例 ID.</DescTextCom>
        </View>
    );
}

export default App;