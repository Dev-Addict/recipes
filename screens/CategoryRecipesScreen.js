import React from 'react';
import {StyleSheet, View, Text, FlatList, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';

import {CATEGORIES, RECIPES} from "../data/data";

const CategoryRecipesScreen = ({navigation: {getParam, navigate}}) => {
    const id = getParam('id');

    const category = CATEGORIES.find(category => category.id === id);

    const renderRecipe = ({item: {id, title, imageUrl, complexity, duration, affordability}}) => (
        <TouchableOpacity activeOpacity={0.8} onPress={() => {
            navigate({
                routeName: 'Recipe',
                params: {
                    id
                }
            })
        }}>
            <View style={{...styles.recipeItem, backgroundColor: category.color}}>
                <Text style={styles.recipeTitle}>{title}</Text>
                <ImageBackground source={{
                    uri: imageUrl
                }} style={styles.recipeBackground}/>
                <View style={styles.recipeDetail}>
                    <Text style={styles.text}>{complexity}</Text>
                    <Text style={styles.text}>{duration}m</Text>
                    <Text style={styles.text}>{affordability}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const categoryRecipes = RECIPES.filter(recipe => recipe.categoryIds.includes(id));

    return (
        <View style={styles.screen}>
            <FlatList data={categoryRecipes} keyExtractor={item => item.id} renderItem={renderRecipe}/>
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
    },
    recipeItem: {
        margin: 20,
        width: Dimensions.get('window').width - 40,
        borderRadius: 10
    },
    recipeBackground: {
        width: '100%',
        height: 150,
        opacity: 0.8
    },
    recipeTitle: {
        padding: 10,
        color: '#f5f6f7',
        fontFamily: 'libre-baskerville-italic',
        fontSize: 20
    },
    recipeDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    text: {
        color: '#f5f6f6',
        fontFamily: 'libre-baskerville-bold'
    }
});

export default CategoryRecipesScreen;