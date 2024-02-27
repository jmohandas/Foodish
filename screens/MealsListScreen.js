import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useEffect } from 'react';
import MealListElement from '../components/MealListElement';

import { MEALS, CATEGORIES } from '../data/dummyData'

const MealsListScreen = ({ route, navigation }) => {
    const catId = route.params.catId;
    const filteredMeals = MEALS.filter(eachMeal => eachMeal.categoryIds.includes(catId))

    const renderMealsList = ({ item }) => {
        return <MealListElement item={ item } />
    };
    useEffect(() => {
        navigation.setOptions({
            title: CATEGORIES.find(eachCategory => eachCategory.id === catId).title
        });
    }, [catId]);

    return (
        <View style={ styles.mealsListContainer }>
            <FlatList 
                data={ filteredMeals }
                renderItem={ renderMealsList }
                keyExtractor={ item => item.id }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    mealsListContainer: {
        flex: 1
    }
})

export default MealsListScreen;