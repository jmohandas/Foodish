import { View, StyleSheet, Text } from 'react-native';

const CategoriesListScreen = () => {
    return (
        <View style={ styles.listContainer }>
            <Text>Categories List Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 1
    }
});

export default CategoriesListScreen;