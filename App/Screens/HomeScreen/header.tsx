import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigations/navigationTypes'; // Assurez-vous que le chemin est correct

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'profil-screen'>;

const Header = () => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    return (
        <View style={styles.container}>
            <View style={styles.profilContainer}>
                <TouchableOpacity style={styles.navContainer} onPress={() => navigation.navigate('profil-screen')}>
                    <View style={styles.imageWrapper}>
                        <Image source={require('../../../assets/images/userImage.jpeg')} style={styles.userImage} />
                        <View style={styles.userImage} />
                    </View>
                    <View style={styles.divider} />
                    <View>
                        <Text style={styles.text}>Bienvenue,</Text>
                        <Text style={styles.name}>Elisa</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.headerWrapper}>
                <FontAwesome5 name="bell" size={13} color={Colors.light.primary} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 33,
        paddingRight: 33,
        paddingTop: '5%',
        paddingBottom: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.light.background,
    },
    headerWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#F3F4FB',
        borderRadius: 60,
        width: 24,
        height: 24,
    },
    navContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 13,
    },
    text: {
        fontSize: 12,
        fontWeight: '300',
        color: Colors.light.primary,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.light.primary,
    },
    profilContainer: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: '#F3F4FB',
    },
    imageWrapper: {
        width: 36,
        height: 36,
        objectFit: 'cover',
        overflow: 'hidden',
        borderRadius: 60,
    },
    userImage: {
        width: '100%',
        height: '100%',
    },
});

export default Header;
