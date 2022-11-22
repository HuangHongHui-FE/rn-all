import React from "react";
import { View, StyleSheet, Image } from "react-native";
import DescTextCom from '../../../components/DescText'

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
    },
});

const App = () => {

    return (
        <View>
            <DescTextCom>图片</DescTextCom>
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/image/qq.jpg')}
                />
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                    }}
                />
                <Image
                    style={styles.stretch}
                    source={require('../../../assets/image/qq.jpg')}
                />
            </View>
        </View>
    );
}

export default App;