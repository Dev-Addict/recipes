import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {CATEGORIES} from "../data/data";

const CategoryRecipesScreen = ({navigation: {getParam}}) => {
    const id = getParam('id');

    const category = CATEGORIES.find(category => category.id === id);

    return (
        <View style={styles.screen}>
            <Text>{category.title} Recipes</Text>
        </View>
    );
};

CategoryRecipesScreen.navigationOptions = ({navigation: {getParam}}) => {
    const id = getParam('id');

    const category = CATEGORIES.find(category => category.id === id);

    return {
        headerTitle: `${category.title} Recipes`,
        headerStyle: {
            backgroundColor: category.color
        },
        headerTintColor: '#f5f6f7'
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryRecipesScreen;