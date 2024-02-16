import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlatCards from './FlatCards/FlatCards';
import ElevatedCards from './ElevatedCards/ElevatedCards';
import TrendingPlaces from './Places/TrendingPlaces';
import BlogCard from './BlogCard/BlogCard';
import Contacts from './Contacts/Contacts';

const Project1 = () => {
  return (
    <SafeAreaView style={{padding: 10, flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <TrendingPlaces/>
        <BlogCard/>
        <Contacts/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Project1;
