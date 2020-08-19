import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from "../components/HeaderButton";
import {CATEGORIES, RECIPES} from "../data/data";

const RecipeScreen = ({navigation: {getParam}}) => {
    const id = getParam('id');

    const recipe = RECIPES.find(recipe => recipe.id === id);

    return (
        <View style={styles.screen}>
            <Text>{recipe.title}</Text>
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
        headerTintColor: '#f5f6f7',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Favorite" iconName="ios-star" onPress={() => {}}/>
            </HeaderButtons>
        )
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