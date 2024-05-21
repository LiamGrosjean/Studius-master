import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import Colors from '../../Utils/Colors';


interface Props {
    iconName: string;
    iconText: string;
    isActive: boolean;
    onPress: () => void;
}

const Categorie = ({ iconName, iconText, isActive, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.cat_container}>
            <View style={[styles.iconWrapper, isActive ? styles.activeIconWrapper : null]}>
                <FontAwesome5 name={iconName} size={15} style={isActive ? styles.activeIcon : styles.icon} />
            </View>
            <Text style={styles.iconText}> {iconText} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    cat_container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    iconWrapper: {
        height: 36,
        width: 36,
        borderRadius: 60,
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: Colors.light.primary,
    },
    activeIcon: {
        color: Colors.light.background,
    },
    activeIconWrapper: {
        backgroundColor: Colors.light.accent,
    },
    iconText: {
        color: Colors.light.primary,
        fontWeight: '400',
        fontSize: 12,
    },
})

export default Categorie
