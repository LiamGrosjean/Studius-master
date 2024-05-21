import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Categorie from './categorie';


const Cats = () => {
  const [activeCategory, setActiveCategory] = useState('Tout');

  const handleCategoryPress = (category: string) => {
    setActiveCategory(category);
  }

  return (
    <View style={styles.categorie_Wrapper}>
        <Categorie iconName='th-large' iconText='Tout' isActive={activeCategory === 'Tout'} onPress={() => handleCategoryPress('Tout')} />
        <Categorie iconName='utensils' iconText='Restauration' isActive={activeCategory === 'Restauration'} onPress={() => handleCategoryPress('Restauration')} />
        <Categorie iconName='swatchbook' iconText='Design' isActive={activeCategory === 'Design'} onPress={() => handleCategoryPress('Design')} />
        <Categorie iconName='house-user' iconText='Aide à domicile' isActive={activeCategory === 'Aide à domicile'} onPress={() => handleCategoryPress('Aide à domicile')} />
        <Categorie iconName='people-carry' iconText='Livraison' isActive={activeCategory === 'Livraison'} onPress={() => handleCategoryPress('Livraison')} />
    </View>
  )
}

const styles = StyleSheet.create ({
    categorie_Wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 23,
    }
})

export default Cats
