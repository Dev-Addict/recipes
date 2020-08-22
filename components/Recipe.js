import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Recipe = ({navigate, category, item: {id, title, imageUrl, complexity, duration, affordability, ...item}}) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => {
        navigate({
            routeName: 'Recipe',
            params: {
                recipe: {...item, id, title, imageUrl, complexity, duration, affordability},
                category
            }
        });
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

const styles = StyleSheet.create({
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

export default Recipe;