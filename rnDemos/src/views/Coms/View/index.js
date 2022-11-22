import React from "react";
import { View, Text } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {
    return (
        <View>
            <DescTextCom>添加描述</DescTextCom>
            <View
                style={{
                    flexDirection: "row",
                    height: 100,
                    padding: 20
                }}
            >
                <View style={{ backgroundColor: "blue", flex: 0.3 }} />
                <View style={{ backgroundColor: "red", flex: 0.5 }} />
                <Text>Hello World!</Text>
            </View>
        </View>
    );
}

export default App;