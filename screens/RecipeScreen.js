import React from 'react';
import {StyleSheet, View, ImageBackground, ScrollView, Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from "../components/HeaderButton";
import {CATEGORIES, RECIPES, FAVORITE_RECIPES} from "../data/data";

const RecipeScreen = ({navigation: {getParam}}) => {
    const id = getParam('id');

    const {complexity, duration, affordability, ingredients, steps, isGlutenFree, isLactoseFree, isVegan, isVegetarian, imageUrl} = RECIPES.find(recipe => recipe.id === id);

    return (
        <ScrollView>
            <View style={styles.screen}>
                <ImageBackground source={{
                    uri: imageUrl
                }} style={styles.image}/>
            </View>
            <View style={{...styles.screen, padding: 10}}>
                <View style={styles.recipeDetail}>
                    <Text style={{...styles.text}}>{complexity}</Text>
                    <Text style={styles.text}>{duration}m</Text>
                    <Text style={styles.text}>{affordability}</Text>
                </View>
                <Text style={styles.title}>Ingredients</Text>
                {ingredients.map(ingredient => <Text key={ingredient} style={styles.ingredient}>{ingredient}</Text>)}
                <Text style={styles.steps}>{steps.join('\n')}</Text>
                <View style={styles.detailRow}>
                    <Text style={styles.text}>Gluten Free</Text>
                    <Text styles={styles.text}>{isGlutenFree ? 'Yes' : 'No'}</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.detailRow}>
                    <Text style={styles.text}>Lactose Free</Text>
                    <Text styles={styles.text}>{isLactoseFree ? 'Yes' : 'No'}</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.detailRow}>
                    <Text style={styles.text}>Vegan</Text>
                    <Text styles={styles.text}>{isVegan ? 'Yes' : 'No'}</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.detailRow}>
                    <Text style={styles.text}>Vegetarian</Text>
                    <Text styles={styles.text}>{isVegetarian ? 'Yes' : 'No'}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

RecipeScreen.navigationOptions = ({navigation: {getParam, toggleDrawer}}) => {
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
                <Item title="Favorite" iconName="ios-star" onPress={() => {
                }
                }/>
            </HeaderButtons>
        ),
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="menu" iconName="ios-menu" onPress={() => toggleDrawer()}/>
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    recipeDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    text: {
        color: '#232425',
        fontFamily: 'libre-baskerville'
    },
    title: {
        fontSize: 24,
        fontFamily: 'libre-baskerville-bold',
        marginBottom: 10,
        marginTop: 12
    },
    ingredient: {
        fontSize: 16,
        fontFamily: 'libre-baskerville-italic',
        marginLeft: 10
    },
    steps: {
        fontSize: 14,
        margin: 4,
        fontFamily: 'libre-baskerville'
    },
    detailRow: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    line: {
        height: 2,
        marginHorizontal: 30,
        backgroundColor: '#232425'
    },
    image: {
        width: '100%',
        height: 200
    }
});

export default RecipeScreen;