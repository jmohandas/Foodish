import { View, StyleSheet, Text, Dimensions, Pressable } from 'react-native';

const ScreenWidth = Dimensions.get('window').width;

const CategoryTile = ({item, onPress}) => {
    return (
        <View style={ [ styles.wrapperContainer] }>
            <Pressable 
                onPress={ onPress } 
                android_ripple={{ color: "#ccc" }}
                style={({pressed}) => [{ backgroundColor: item.color, borderRadius: 8, }, pressed && { opacity: 0.65 }]}>
                <View style={ styles.innerView }>
                    <Text style={ styles.titleText }>{ item.title }</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapperContainer: {
        width: ScreenWidth * 0.4,
        height: ScreenWidth * 0.4,
        margin: ScreenWidth * 0.04,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.45,
        shadowRadius: 8,
        shadowOffset: { width: 2, height: 4 },
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: ScreenWidth * 0.4,
        height: ScreenWidth * 0.4,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    clickStyle: {
        opacity: 0.45
    }
});

export default CategoryTile;