import { View, Text, ScrollView, Image,StyleSheet } from 'react-native'
import React from 'react'
import Header from './header'
import Colors from '../../Utils/Colors'
import ProchainScreen from './ProchainScreen'
import AccesRapideScreen from './AccesRapideScreen'


export default function HomeScreen() {
  return (
    <View style={{flex:1, backgroundColor:Colors.light.background}}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingLeft:33}}>
            <ProchainScreen/>
            <AccesRapideScreen/>
        </ScrollView>
       
    </View>
  )
}
const styles = StyleSheet.create({

})