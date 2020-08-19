import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import HeaderButton from '../components/HeaderButton';

const FiltersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Category Recipes Screen</Text>
        </View>
    );
};

FiltersScreen.navigationOptions = ({navigation: {toggleDrawer}}) => ({
    headerTitle: 'Filters',
    headerStyle: {
        backgroundColor: '#ff6b81'
    },
    headerTintColor: '#f5f6f7',
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="menu" iconName="ios-menu" onPress={() => toggleDrawer()}/>
        </HeaderButtons>
    )
});

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FiltersScreen;