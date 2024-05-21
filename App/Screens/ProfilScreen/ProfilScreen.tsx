import { View, Text, Button, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React from 'react'
import { useAuth } from '@clerk/clerk-react'
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import LoginScreen from '../LoginScreen/LoginScreen';


const ProfileScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { signOut, isSignedIn } = useAuth()
  return (

    <View style={styles.main}>
      <View style={styles.Head}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name='chevron-left' size={18} color='#242C5D' />
          </TouchableOpacity>
        </View>
        <Text style={styles.titre}>Compte professionnel</Text>
        <Text style={styles.titre}></Text>
      </View>
      <View style={styles.sousmain}>
        <View style={{ gap: 10 }}>
          <TouchableOpacity style={styles.profileLink} onPress={() => navigation.push('mes-candidatures')}>
            <FontAwesome5 name='briefcase' size={16} color={Colors.light.primary} />
            <Text style={{ fontSize: 16, color: Colors.light.primary }}>   Mes candidatures</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileLink} onPress={() => navigation.push('mes-logements')}>
            <FontAwesome5 name='building' size={16} color={Colors.light.primary} />
            <Text style={{ fontSize: 16, color: Colors.light.primary }}>   Mes Logements</Text>
          </TouchableOpacity>
          <View>
            <Button title='Ajouter un job' onPress={() => navigation.navigate('AjouterJob')} />
            <Button title='Se connecter' onPress={() => navigation.navigate('LoginScreen')} />
            <Button title='Se déconnecter' onPress={() => signOut()} />
          </View>
        </View>
      </View>
    </View>

  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 33,
    backgroundColor: Colors.light.background,
  },
  profileLink: {
    marginTop: 20,
    flexDirection: 'row',
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.light.primary,
    borderRadius: 5,
    gap: 20,

  },
  buttonText: {
    marginTop: 20,
    color: Colors.light.background,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonWrapper: {
    backgroundColor: Colors.light.accent,
    paddingVertical: 14,
    marginHorizontal: 'auto',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 41,
  },
  titre: {
    fontSize: 18,
    fontWeight: '600',
    color: '#242C5D',
    textAlign: 'center',
  },
  leftContainer: {
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: '#fffff',
    borderRadius: 8,
    width: 30,
    height: 30,
    paddingTop: 5,

  },

  Head: {
    paddingTop: '5%',
    paddingBottom: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.light.background,

  },
  sousmain: {
    justifyContent: 'center',
    alignContent: 'center',
  },

})