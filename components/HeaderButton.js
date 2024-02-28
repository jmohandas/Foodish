import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderButton = ({ onPressAction }) => {
    return (
        <Pressable onPress={onPressAction} style={({pressed}) => { pressed && styles.iconPress }}>
            <Ionicons name='heart-outline' size={24} color="white" />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    iconPress: {
        opacity: 0.5
    }
});

export default HeaderButton;