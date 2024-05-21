import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../Utils/Colors';



const Search = ({ titre = 'Trouver un Job' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titre}</Text>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Ex. Vendeur"
          placeholderTextColor="#999"
        />
        <View style={styles.separator} />
        <Icon name="sliders" size={24} style={styles.icon} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 33,
    paddingBottom: 17,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#242C5D', 
  },
  container_cat: {
    paddingTop: 24,
    paddingBottom: 15,
    backgroundColor: Colors.light.background,
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#F3F4FB',
    backgroundColor: '#F3F4FB',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  icon: {
    marginRight: 10,
    fontSize: 13,
    color: Colors.light.primary,
  },
  input: {
    flex: 1,
    fontSize: 12,
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
});

export default Search;
