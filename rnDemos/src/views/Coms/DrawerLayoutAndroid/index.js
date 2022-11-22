import React, { useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {

    const [drawerPosition, setDrawerPosition] = useState("left");
    const changeDrawerPosition = () => {
        if (drawerPosition === "left") {
            setDrawerPosition("right");
        } else {
            setDrawerPosition("left");
        }
    };

    const navigationView = (
        <View style={styles.navigationContainer}>
            <Text style={{ margin: 10, fontSize: 15 }}>I'm in the Drawer!</Text>
        </View>
    );

    return (
        <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={() => navigationView}
        >
            <DescTextCom>封装了 Android 平台DrawerLayout的 React 组件。抽屉（通常用于导航切换）是通过renderNavigationView方法渲染的，并且 DrawerLayoutAndroid 的直接子视图会成为主视图（用于放置内容）。导航视图一开始在屏幕上并不可见，不过可以从drawerPosition指定的窗口侧面拖拽出来，并且抽屉的宽度可以使用drawerWidth属性来指定。

                译注：此组件仅能在 Android 上使用。我们推荐使用跨平台的react-navigation中的 DrawerNavigation 来代替此组件。</DescTextCom>

            <View style={styles.container}>
                <Text style={{ margin: 10, fontSize: 15 }}>
                    DrawerLayoutAndroid example
                </Text>
                <Button
                    title="Change Drawer Position"
                    onPress={() => changeDrawerPosition()}
                />
                <Text style={{ margin: 10, fontSize: 15 }}>
                    Drawer on the {drawerPosition}! Swipe from the side to see!
                </Text>
            </View>
        </DrawerLayoutAndroid>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
        backgroundColor: "#ecf0f1",
        padding: 8
    },
    navigationContainer: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "#fff",
        padding: 8
    }
});

export default App;