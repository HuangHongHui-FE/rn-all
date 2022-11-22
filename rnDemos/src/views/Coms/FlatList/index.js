import React, { useState } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Platform, TouchableHighlight } from "react-native";
import DescTextCom from '../../../components/DescText'


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const Item2 = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

const App = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    const renderItem2 = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
            <Item2
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    const _onPress = function(item, index, separators){
        console.log(item, index, separators);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <DescTextCom>高性能的简单列表组件:</DescTextCom>
                <DescTextCom>完全跨平台。:</DescTextCom>
                <DescTextCom>支持水平布局模式。:</DescTextCom>
                <DescTextCom>行组件显示或隐藏时可配置回调事件。:</DescTextCom>
                <DescTextCom>支持单独的头部组件。:</DescTextCom>
                <DescTextCom>支持单独的尾部组件。:</DescTextCom>
                <DescTextCom>支持自定义行间分隔线。:</DescTextCom>
                <DescTextCom>支持下拉刷新。:</DescTextCom>
                <DescTextCom>支持上拉加载。:</DescTextCom>
                <DescTextCom>支持跳转到指定行（ScrollToIndex）。:</DescTextCom>
                <DescTextCom>支持多列布局。:</DescTextCom>
            </View>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <FlatList
                data={DATA}
                renderItem={renderItem2}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />

            <FlatList
                ItemSeparatorComponent={
                    Platform.OS !== 'android' &&
                    (({ highlighted }) => (
                        <View
                            style={[
                                styles.separator,
                                highlighted && { marginLeft: 0 }
                            ]}
                        />
                    ))
                }
                data={[{ title: 'Title Text', key: 'item1' }]}
                renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                        onPress={() => _onPress(item)}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <View style={{ backgroundColor: 'white' }}>
                            <Text>{item.title}</Text>
                        </View>
                    </TouchableHighlight>
                )}
            />
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 40,
    },
    title: {
        fontSize: 10,
    },
    separator: {

    }
});

export default App;