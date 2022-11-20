import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";
import DescTextCom from '../../../components/DescText'
const App = () => {
    // Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true
        }).start(({ finished }) => {
            /* 动画完成的回调函数 */
            console.log(finished);
        });
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 5000
        }).start(({ finished }) => {
            console.log(finished);
        });
    };

    return (
        <View style={styles.container}>
            <DescTextCom>动画</DescTextCom>
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        opacity: fadeAnim // Bind opacity to animated value
                    }
                ]}
            >
                <Text style={styles.fadingText}>Fading View!</Text>
            </Animated.View>
            <View style={styles.buttonRow}>
                <Button title="Fade In" onPress={fadeIn} />
                <Button title="Fade Out" onPress={fadeOut} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10
    },
    buttonRow: {
        flexDirection: "row",
        marginVertical: 16
    }
});

export default App;