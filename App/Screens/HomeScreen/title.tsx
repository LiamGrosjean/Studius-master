import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'


const Title = ({ titre, displayLink }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titre}</Text>
            {displayLink && <Text style={styles.titleLink} onPress={() => {}}>Voir tout</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.light.primary,
    },
    titleLink: {
        color: '#D62528',
        fontSize: 12,
        fontWeight: '400',
    }
})

export default Title