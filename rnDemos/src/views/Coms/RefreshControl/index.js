import React from "react";
import {
    ScrollView,
    RefreshControl,
    StyleSheet,
    Text,
    SafeAreaView,
} from "react-native";
// import Constants from 'expo-constants';
import DescTextCom from '../../../components/DescText'

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
const App = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <DescTextCom>这一组件可以用在 ScrollView 或 FlatList 内部，为其添加下拉刷新的功能。当 ScrollView 处于竖直方向的起点位置（scrollY: 0），此时下拉会触发一个onRefresh事件。</DescTextCom>

            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Text>Pull down to see RefreshControl indicator</Text>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;