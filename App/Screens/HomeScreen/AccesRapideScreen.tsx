import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from './title'
import Colors from '../../Utils/Colors'
import Quickaccess from './quickaccess'
const AccesRapideScreen = () => {
  return (
    <View style={styles.container}>
        <Title titre='Accès rapide' displayLink={false} />
        <Quickaccess/>
    </View>
  )
}

export default AccesRapideScreen

const styles = StyleSheet.create({
  container:{
    marginTop:19,
  }
})