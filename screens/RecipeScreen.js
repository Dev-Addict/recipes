import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const RecipeScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Recipe Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RecipeScreen;