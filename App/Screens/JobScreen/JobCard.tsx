import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const JobCard = ({ maxWidth, id, title, company, description, emplacement, hSemaine, hSalaire}) => {

  const navigation = useNavigation<StackNavigationProp<any>>();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
  };
  
  const truncatedDescription = description.length > 130 ? description.substring(0, 130) + '...' : description;
  const truncatedTitle = title.length > 40 ? title.substring(0, 40) + '...' : title;

    return (
      <TouchableOpacity onPress={() => { navigation.navigate('DetailJobScreen',{idJob:id})}}>
            <View style={[styles.container, { maxWidth }]}>
                <View style={styles.subContainer}>
                    <View style={styles.brandContainer}>
                        <View style={styles.iconContainer}>
                          <Image source={require('../../../assets/images/suggestion-image.png')} style={{ width: 30, height: 30, borderRadius: 9999 }} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{truncatedTitle}</Text>
                            <Text style={styles.subtitle}>{company}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleBookmarkToggle}>
                        <FontAwesomeIcon icon={isBookmarked ? faBookmark : faBookmark} style={styles.bookmark} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.description}>{truncatedDescription}</Text>
                <View style={styles.divider} />
                <View style={styles.infoContainer}>
                    <View style={styles.infoItem}>
                        <FontAwesome5 name='map-marker-alt' style={styles.infoIcon} />
                        <Text style={styles.infoText}>{emplacement}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <FontAwesome5 name='briefcase' style={styles.infoIcon} />
                        <Text style={styles.infoText}>{hSemaine} h/sem</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <FontAwesome5 name='money-bill' style={styles.infoIcon} />
                        <Text style={styles.infoText}>{hSalaire}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EDEDED',
    gap: 10,
    width: '100%', 
    maxWidth: 226,
    marginTop: 10,
    position: 'relative',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  brandContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  iconContainer: {
    width: 30,
  },
  iconCircle: {
    width: 32,
    height: 32,
    backgroundColor: '#F3F4FB',
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  textContainer: {
    gap: 3,
    alignItems: 'flex-start',
    maxWidth: 200,
  },
  title: {
    color: '#242C5D',
    fontSize: 16,
    fontWeight: '600',
    flexWrap: 'wrap',
  },
  subtitle: {
    color: '#696969',
    fontSize: 14,
    fontWeight: '400',
  },
  bookmark: {
    color: '#D62528',
    fontSize: 12,
    position: 'absolute',
    right: 0,
  },
  description: {
    color: '#353558',
    fontSize: 12,
    fontWeight: '300',
  },
  divider: {
    width: '100%',
    height: 0.5,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  infoIcon: {
    color: '#242C5D',
    fontSize: 8,
  },
  infoText: {
    color: '#242C5D',
    fontSize: 10,
    fontWeight: '300',
  },
});

export default JobCard;
