import React from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from "react-native";
// import Constants from 'expo-constants';
import DescTextCom from '../../../components/DescText'


const Separator = () => {
    return <View style={styles.separator} />;
}
const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <DescTextCom>按钮</DescTextCom>
            </View>
            <View>
                <Text style={styles.title}>
                    title和onPress处理程序是必需的。建议设置accessibilityLabel可帮助每个人使用您的应用程序。
                </Text>
                <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    以每个平台上看起来标准的方式调整颜色。在…上
                    iOS中，颜色属性控制文本的颜色。在Android上颜色调整按钮的背景色。
                </Text>
                <Button
                    title="Press me"
                    color="#f194ff"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    All interaction for the component are disabled.
                </Text>
                <Button
                    title="Press me"
                    disabled
                    onPress={() => Alert.alert('Cannot press this one')}
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    This layout strategy lets the title define the width of the button.
                </Text>
                <View style={styles.fixToText}>
                    <Button
                        title="Left button"
                        onPress={() => Alert.alert('Left button pressed')}
                    />
                    <Button
                        title="Right button"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                </View>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default App;