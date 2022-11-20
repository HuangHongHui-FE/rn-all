import React, { useCallback, useState, useEffect } from "react";
import { Alert, Button, Linking, StyleSheet, View, Text } from "react-native";

const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456";
import DescTextCom from "../../../components/DescText";

// 1
const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
};

// 2
const OpenSettingsButton = ({ children }) => {
    const handlePress = useCallback(async () => {
        // Open the custom settings if the app has one
        await Linking.openSettings();
    }, []);

    return <Button title={children} onPress={handlePress} />;
};

// 3
const useMount = func => useEffect(() => func(), []);
const useInitialURL = () => {
    const [url, setUrl] = useState(null);
    const [processing, setProcessing] = useState(true);

    useMount(() => {
        const getUrlAsync = async () => {
            // Get the deep link used to open the app
            const initialUrl = await Linking.getInitialURL();

            // The setTimeout is just for testing purpose
            setTimeout(() => {
                setUrl(initialUrl);
                setProcessing(false);
            }, 1000);
        };

        getUrlAsync();
    });

    return { url, processing };
};

// 4
const SendIntentButton = ({ action, extras, children }) => {
    const handlePress = useCallback(async () => {
        try {
            await Linking.sendIntent(action, extras);
        } catch (e) {
            Alert.alert(e.message);
        }
    }, [action, extras]);

    return <Button title={children} onPress={handlePress} />;
};
const App = () => {
    const { url: initialUrl, processing } = useInitialURL();

    return (
        <View style={styles.container}>
            <DescTextCom>Linking提供了一个通用的接口来与传入和传出的 App 链接进行交互。</DescTextCom>

            <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>

            <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>

            <OpenSettingsButton>Open Settings</OpenSettingsButton>

            <Text>
                {processing
                    ? `Processing the initial url from a deep link`
                    : `The deep link is: ${initialUrl || "None"}`}
            </Text>
            <SendIntentButton action="android.intent.action.POWER_USAGE_SUMMARY">
                Power Usage Summary
            </SendIntentButton>
            <SendIntentButton
                action="android.settings.APP_NOTIFICATION_SETTINGS"
                extras={[
                    { "android.provider.extra.APP_PACKAGE": "com.facebook.katana" },
                ]}
            >
                App Notification Settings
            </SendIntentButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default App;