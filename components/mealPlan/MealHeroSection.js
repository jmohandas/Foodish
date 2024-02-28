import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
const ScreenWidth = Dimensions.get('window').width;

const MealHeroSection = ({ item }) => {
    return (
        <View style={ styles.mealElementInner }>
            <Image source={{ uri: item.imageUrl }} style={ styles.mealImage } />
            <View style={ styles.titleContainer }>
                <Text style={ styles.titleText}>{ item.title }</Text>
            </View>
            <View style={ styles.topAttributesMain }>
                <View style={ styles.topAttributesContainer }>
                    <Text style={ styles.topAttributeHeading }>Duration :</Text>
                    <Text style={ styles.topAttributeValue }>{ item.duration } Mins</Text>
                </View>
                <View style={ styles.topAttributesContainer }>
                    <Text style={ styles.topAttributeHeading }>Complexity :</Text>
                    <Text style={ styles.topAttributeValue }>{ item.complexity }</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mealElementInner: {
        width: ScreenWidth * 0.96,
        marginVertical: ScreenWidth * 0.02,
        paddingVertical: ScreenWidth * 0.02,
        paddingHorizontal: ScreenWidth * 0.02,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.55,
        shadowRadius: 8,
        shadowOffset: { width: 2, height: 4 },
    },
    mealImage: {
        width: ScreenWidth * 0.92,
        height: ScreenWidth * 0.56,
        borderRadius: 8,
    },
    titleContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        paddingVertical: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    topAttributesMain: {
       flexDirection: 'row'
    },
    topAttributesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        paddingVertical: 10,
    },
    topAttributeHeading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    topAttributeValue: {
        fontSize: 14,
        fontWeight: 'bold',
    }
});

export default MealHeroSection;