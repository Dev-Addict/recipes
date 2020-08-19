import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import {FAVORITE_RECIPES, RECIPES, CATEGORIES} from "../data/data";
import Recipe from "../components/Recipe";

const FavoriteRecipesScreen = ({navigation: {navigate}}) => {
    const favoriteRecipes = RECIPES.filter(({id}) => FAVORITE_RECIPES.includes(id));

    return (
        <View style={styles.screen}>
            <FlatList data={favoriteRecipes} keyExtractor={item => item.id}
                      renderItem={props =>
                          <Recipe navigate={navigate}
                                  category={CATEGORIES.find(({id}) => props.item.categoryIds[0] === id)}
                                  {...props}/>}/>
        </View>
    );
};

FavoriteRecipesScreen.navigationOptions = {
    headerTitle: 'Favorite Recipes',
    headerStyle: {
        backgroundColor: '#9980FA'
    },
    headerTintColor: '#f5f6f7'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoriteRecipesScreen;