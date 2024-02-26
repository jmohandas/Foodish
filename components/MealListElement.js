import { View, StyleSheet, Text, Dimensions, Pressable, Image } from 'react-native';
const ScreenWidth = Dimensions.get('window').width;

const MealListElement = ({item}) => {
    return (
        <View style={ styles.mealElementContainer }>
            <Pressable onPress={() => {}}>
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
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    mealElementContainer: {
        Flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mealElementInner: {
        Flex: 1,
        width: ScreenWidth * 0.96,
        height: ScreenWidth * 0.9,
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    topAttributesMain: {
       flex: 1,
       flexDirection: 'row'
    },
    topAttributesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ccc',
        borderWidth: 1
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

export default MealListElement;