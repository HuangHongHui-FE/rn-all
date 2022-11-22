import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {
    return (
        <View>
            <DescTextCom>添加描述</DescTextCom>
            <Text style={styles.baseText}>
                I am bold
                <Text style={styles.innerText}> and red</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    baseText: {
        fontWeight: 'bold'
    },
    innerText: {
        color: 'red'
    }
});

export default App;