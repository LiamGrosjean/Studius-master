import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../Utils/Colors'
import Header from '../HomeScreen/header'
import Title from '../HomeScreen/title'
import JobCard from './JobCard'
import Cats from './Cats'
import Search from './Search'
import GlobalApi from '../../Utils/GlobalApi'

const JobScreen = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const result = await GlobalApi.getJobs();
        setJobs(result.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const renderHeader = () => (
    <View>
      <Header />
      <Search />
      <View style={styles.container}>
        <View>
          <Title titre='Catégories' displayLink={true} />
          <Cats />
        </View>
        <View style={styles.suggestions_container}>
          <Title titre='Pour vous' displayLink={true} />
          <FlatList
            data={jobs}
            style={{ backgroundColor: Colors.light.background, overflow: 'visible' }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <JobCard
                maxWidth={300}
                title={item.titre}
                company={item.companyName}
                description={item.jobDescription}
                emplacement={item.jobLocation}
                hSemaine={item.jobHours}
                hSalaire={item.jobSalary}
                jobLien=''
                id={item.id}
              />
            )}
          />
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      ListFooterComponent={() => (
        <View style={styles.footerContainer}>
          <Title titre='Jobs récents' displayLink={true} />
          <FlatList
            data={jobs}
            style={{ backgroundColor: Colors.light.background, paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <JobCard
                title={item.titre}
                company={item.companyName}
                description={item.jobDescription}
                emplacement={item.jobLocation}
                hSemaine={item.jobHours}
                hSalaire={item.jobSalary}
                jobLien=''
                id={item.id}
              />
            )}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 33,
    backgroundColor: Colors.light.background,
  },
  suggestions_container: {
    paddingTop: 36,
    gap: 16,
  },
  footerContainer: {
    paddingHorizontal: 33,
    paddingTop: 26,
    backgroundColor: Colors.light.background,
  },
})

export default JobScreen
