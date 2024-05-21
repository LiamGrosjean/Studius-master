import { View, Text, ScrollView } from 'react-native'
import React, { ReactNode, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../Utils/Colors';
import { useRoute } from '@react-navigation/native';
import GlobalApi from '../../Utils/GlobalApi';


export default function  CompetencesContent(){
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

          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.text}>
            {jobDetails?.competences}
            </Text>  
            
          </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      scrollContainer: {
        justifyContent: 'center',
      },
      text: {
        fontSize: 15,
        color: Colors.light.primary,
    },
    });
    
