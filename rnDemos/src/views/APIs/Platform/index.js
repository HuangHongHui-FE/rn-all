import React from 'react';
import { Platform, StyleSheet, Text, ScrollView } from 'react-native';

const App = () => {
    const Component = Platform.select({
        ios: () => require('ComponentIOS'),
        android: () => require('ComponentAndroid'),
        native: () => require('ComponentForNative'),
        default: () => require('ComponentForWeb')
    })();


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>OS</Text>
            <Text style={styles.value}>{Platform.OS}</Text>
            <Text>OS Version</Text>
            <Text style={styles.value}>{Platform.Version}</Text>
            <Text>isTV</Text>
            <Text style={styles.value}>{Platform.isTV.toString()}</Text>
            {Platform.OS === 'ios' && <>
                <Text>isPad</Text>
                <Text style={styles.value}>{Platform.isPad.toString()}</Text>
            </>}
            <Text>Constants</Text>
            <Text style={styles.value}>
                {JSON.stringify(Platform.constants, null, 2)}
            </Text>
            {/* <Component />; */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        // !!
        ...Platform.select({
            android: {
                backgroundColor: 'green'
            },
            ios: {
                backgroundColor: 'red'
            },
            default: {
                // other platforms, web for example
                backgroundColor: 'blue'
            }
        })
    },
    value: {
        fontWeight: '600',
        padding: 4,
        marginBottom: 8
    }
});

export default App;