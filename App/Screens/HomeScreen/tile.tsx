import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import {useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const Tile = ({ iconName, text, bgColor, lien}) => {
    const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <TouchableOpacity onPress={() => { navigation.navigate(lien)}}> 
         {/* <TouchableOpacity onPress={() => {router.push(lien)}}> */}
      <View style={styles.container}>
          
            {/* { backgroundColor: bgColor, background: 'linear-gradient(122deg, #D62528 5%, #141332 100%)' }]}> */}
            
                <View style={[styles.iconContainer,{ backgroundColor: bgColor,background: 'linear-gradient(122deg, #D62528 5%, #141332 100%)'}]}>
                    <FontAwesome5 name={iconName} size={16} color="white" />
                </View>
                
                <Text style={styles.text}>{text}</Text>
            
           
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.background,
    paddingTop: 22,
    paddingBottom: 22,
    borderRadius: 8,
  },
  iconContainer: {
    borderRadius: 12,
    padding: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.primary,
  },
  gradientStyle: {
    // Assurez-vous que le style du gradient couvre toute la zone nécessaire
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  iconStyle:{
    
  }
});

export default Tile;