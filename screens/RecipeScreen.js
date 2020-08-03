import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {CATEGORIES, RECIPES} from "../data/data";

const RecipeScreen = ({navigation: {getParam}}) => {
    const id = getParam('id');

    const recipe = RECIPES.find(recipe => recipe.id === id);

    return (
        <View style={styles.screen}>
            <Text>Recipe Screen</Text>
        </View>
    );
};

RecipeScreen.navigationOptions = ({navigation: {getParam}}) => {
    const id = getParam('id');

    const recipe = RECIPES.find(recipe => recipe.id === id);

    const category = CATEGORIES.find(category => category.id === recipe.categoryIds[0]);

    return {
        headerTitle: `${recipe.title} Recipes`,
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

export default RecipeScreen;