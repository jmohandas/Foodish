import { View, StyleSheet, Text } from 'react-native';

const MealsListScreen = () => {
    return (
        <View style={ styles.mealsListContainer }>
            <Text>Meals List here</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    mealsListContainer: {
        flex: 1
    }
})

export default MealsListScreen;