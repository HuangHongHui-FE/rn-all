import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {
    return (
        <View style={container}>
            <DescTextCom>提供了一种类似 CSS 样式表的抽象。</DescTextCom>
            <Text style={text}>React Native</Text>

            <Text style={flattenStyle}>React Native</Text>
            <Text>Flatten Style</Text>
            <Text style={page.code}>
                {JSON.stringify(flattenStyle, null, 2)}
            </Text>

            <View style={styles.box1}>
                <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.text}>2</Text>
            </View>
            
            <Text style={styles.row}>React</Text>
            <Text style={styles.row}>Native</Text>
        </View>
    );
}

const lists = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: '#61dafb',
    },
    listItem: {
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
});

const page = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        alignItems: "center"
    },
    text: {
        color: "#000",
        fontSize: 14,
        fontWeight: "bold"
    },
    code: {
        marginTop: 12,
        padding: 12,
        borderRadius: 8,
        color: "#666",
        backgroundColor: "#eaeaea"
    }
});

// 1
const container = StyleSheet.compose(page.container, lists.listContainer);
const text = StyleSheet.compose(page.text, lists.listItem);

const typography = StyleSheet.create({
    header: {
        color: "#61dafb",
        fontSize: 30,
        marginBottom: 36
    }
});

// 2
const flattenStyle = StyleSheet.flatten([
    page.text,
    typography.header
]);


const styles = StyleSheet.create({
    box1: {
        position: 'absolute',
        top: 40,
        left: 40,
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    box2: {
        ...StyleSheet.absoluteFill,  // 3
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
    row: {
        padding: 4,
        borderBottomColor: "red",
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});


// 4

export default App;