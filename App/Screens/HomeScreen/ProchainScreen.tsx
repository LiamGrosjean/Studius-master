import { View, Text, ScrollView, Image,StyleSheet } from 'react-native'
import React from 'react'
import Title from './title'
import Colors from '../../Utils/Colors'


const ProchainScreen = () => {
  return (
    <View style={styles.container}>
        <View>
            <Title titre='Prochains événements' displayLink={true} />
            <ScrollView horizontal={true} style={styles.imageContainer} showsHorizontalScrollIndicator={false}>
            <View style={styles.imageWrapper}>
                <Image source={require('../../../assets/images/events.png')} style={{width: 262, height: 129, borderRadius: 5}}/>
                <Image source={require('../../../assets/images/events2.png')} style={{width: 262, height: 129, borderRadius: 5}}/>
            </View>
            </ScrollView>
        </View>
    </View>
   
  )
}

export default ProchainScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10,
        paddingRight: 33,
        // paddingLeft: 33,
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
    },
    imageWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginTop: 19,
      },
      imageContainer: {
        overflow: 'visible',
      }
})