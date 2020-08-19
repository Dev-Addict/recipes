import React from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Platform} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryRecipesScreen from "../screens/CategoryRecipesScreen";
import RecipeScreen from "../screens/RecipeScreen";
import FavoriteRecipesScreen from "../screens/FavoriteRecipesScreen";

const RecipeNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryRecipes: CategoryRecipesScreen,
    Recipe: RecipeScreen
});

const tabScreenConfig = {
    Recipes: {
        screen: RecipeNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="md-restaurant" size={25} color={tabInfo.tintColor}/>;
            }
        }
    },
    Favorites: {
        screen: FavoriteRecipesScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={24} color={tabInfo.tintColor}/>;
            }
        }
    }
};

const RecipeTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    shifting: true
}) : createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: '#9980FA',
        inactiveTintColor: '#9980FAAA'
    }
});

export default createAppContainer(RecipeTabNavigator);