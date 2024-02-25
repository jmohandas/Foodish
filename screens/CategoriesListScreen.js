import { View, StyleSheet, Text, FlatList } from 'react-native';
import CategoryTile from '../components/CategoryTile';

import { CATEGORIES } from '../data/dummyData';

const CategoriesListScreen = ({ navigation }) => {
    const openMealsListAction = (item) => {
        navigation.navigate('MealsList', {
            catId: item.id
        });
    };

    const renderCatgoryTiles = ({ item }) => {
       return <CategoryTile item = {item} onPress = { openMealsListAction.bind(this, item) }/>
    };

    return (
        <View style={ styles.listContainer }>
            <FlatList 
                data={ CATEGORIES } 
                keyExtractor={ (item) => item.id }
                renderItem={ renderCatgoryTiles }
                numColumns={2}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesListScreen;