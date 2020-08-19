import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import HeaderButton from '../components/HeaderButton';
import Recipe from "../components/Recipe";
import {CATEGORIES, RECIPES} from "../data/data";

const CategoryRecipesScreen = ({navigation: {getParam, navigate}}) => {
    const id = getParam('id');

    const category = CATEGORIES.find(category => category.id === id);

    const categoryRecipes = RECIPES.filter(recipe => recipe.categoryIds.includes(id));

    return (
        <View style={styles.screen}>
            <FlatList data={categoryRecipes} keyExtractor={item => item.id}
                      renderItem={props => <Recipe navigate={navigate} category={category} {...props}/>}/>
        </View>
    );
};

CategoryRecipesScreen.navigationOptions = ({navigation: {getParam, toggleDrawer}}) => {
    const id = getParam('id');

    const category = CATEGORIES.find(category => category.id === id);

    return {
        headerTitle: `${category.title} Recipes`,
        headerStyle: {
            backgroundColor: category.color
        },
        headerTintColor: '#f5f6f7',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="menu" iconName="ios-menu" onPress={() => toggleDrawer()}/>
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

export default CategoryRecipesScreen;