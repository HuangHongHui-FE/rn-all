import React from "react";
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text } from "react-native";
import DescTextCom from '../../../components/DescText'

// import Constants from 'expo-constants';
const DATA = [];
const getItem = (data, index) => {
    return {
        id: Math.random().toString(12).substring(0),
        title: `Item ${index + 1}`
    }
}

const getItemCount = (data) => {
    return 50;
}

const Item = ({ title }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <DescTextCom>FlatList和SectionList的底层实现。FlatList 和 SectionList 使用起来更方便，同时也有相对更详细的文档。一般来说，仅当想获得比 FlatList 更高的灵活性（比如说在使用 immutable data 而不是 普通数组）的时候，你才应该考虑使用 VirtualizedList。</DescTextCom>

            <VirtualizedList
                data={DATA}
                initialNumToRender={4}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.key}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
    },
    title: {
        fontSize: 32,
    },
});

export default App;