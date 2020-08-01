import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar, Platform} from 'react-native';

const App = () => {
    return (
        <SafeAreaView>
            <View style={{...styles.app, ...(Platform.OS === 'android' ? {paddingTop: StatusBar.currentHeight} : {})}}>
                <Text>App</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
    },
});

export default App;
