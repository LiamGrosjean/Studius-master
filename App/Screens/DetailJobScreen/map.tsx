import { View, Text } from 'react-native'
import React, { ReactNode, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { FontAwesome5 } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import GlobalApi from '../../Utils/GlobalApi';



const initiaRegion={
  latitude: 43.1257311,
  longitude: 5.9304919,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}


export default function Map(){

  const param = useRoute().params;

  const [selectedTab, setSelectedTab] = useState('Description');
  const [content, setContent] = useState<ReactNode | null>(null);
  const [jobDetails, setJobDetails] = useState<any>(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const result: any = await GlobalApi.getJobs();
        const job = result.jobs.find((job: any) => job.id === param.idJob);
        if (job) {
          setJobDetails(job);
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
  
    fetchJobDetails();
  }, [param.idJob]);
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={initiaRegion}
      showsUserLocation
      showsMyLocationButton
      
      />
       <View style={{flexDirection: 'row',  justifyContent: 'center' }}>
       <View style={{marginRight:9 , marginTop: 13 }}>

       <FontAwesome5 name="map-pin" size={15} color="#242C5D" />
       </View>

       <Text style={{ marginTop : 15, color : "#242C5D" }}>{jobDetails?.jobLocation}</Text>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  }

})
