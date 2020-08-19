import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createDrawerNavigator
} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Platform} from 'react-native';
import {Ionicons, FontAwesome} from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryRecipesScreen from "../screens/CategoryRecipesScreen";
import RecipeScreen from "../screens/RecipeScreen";
import FavoriteRecipesScreen from "../screens/FavoriteRecipesScreen";
import FiltersScreen from "../screens/FiltersScreen";

const RecipeNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryRecipes: CategoryRecipesScreen,
    Recipe: RecipeScreen
});

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoriteRecipesScreen,
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
        screen: FavoritesNavigator,
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

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
});

const drawerNavigator = createDrawerNavigator({
    Home: {
        screen: RecipeTabNavigator,
        navigationOptions: {
            drawerIcon: (drawerInfo) => <Ionicons name="md-home" size={24} color={drawerInfo.tintColor}/>
        }
    },
    Filters: {
        screen: FiltersNavigator,
        navigationOptions: {
            drawerIcon: (drawerInfo) => <FontAwesome name="filter" size={24} color={drawerInfo.tintColor}/>
        }
    }
}, {
    contentOptions: {
        labelStyle: {
            fontFamily: 'libre-baskerville-bold'
        }
    }
});

export default createAppContainer(drawerNavigator);