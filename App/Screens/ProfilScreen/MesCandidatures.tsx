import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import JobCard from '../JobScreen/JobCard';
import Colors from '../../Utils/Colors';
import Header from '../HomeScreen/header';
import Search from '../JobScreen/Search';
import GlobalApi from '../../Utils/GlobalApi';
import { useNavigation } from '@react-navigation/native';


const MesCandidatures = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const result: any = await GlobalApi.getJobs();
        setJobs(result.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
  
    fetchJobs();
  }, []);

  return (
    <View>
      <Header />
      <Search titre='Mes candidatures'/>
      <FlatList
        data={jobs as any[]} // Add type assertion to 'any[]'
        style={{paddingHorizontal: 33, backgroundColor: Colors.light.background, flexDirection: 'column',}}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard 
            title={item.titre} 
            company={item.companyName} 
            description={item.jobDescription} 
            emplacement={item.jobLocation}
            hSemaine={item.jobHours}
            hSalaire={item.jobSalary}
            jobLien={item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 33,
    paddingTop: 24,
  },
});

export default MesCandidatures;
