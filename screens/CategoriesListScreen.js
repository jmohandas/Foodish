import { View, StyleSheet, Text, FlatList } from 'react-native';
import CategoryTile from '../components/CategoryTile';

import { CATEGORIES } from '../data/dummyData';

const CategoriesListScreen = () => {
    const renderCatgoryTiles = ({ item }) => {
       return <CategoryTile item = {item} />
    }

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