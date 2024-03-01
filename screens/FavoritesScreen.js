import { View, StyleSheet, Text } from 'react-native';

const FavoritesScreen = () => {
    return (
        <View style={ styles.mainContainer }>
            <Text>Favorites Screen Here!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
});

export default FavoritesScreen;