import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Box from '../components/Box';

const ElevatedCards = () => {
  return (
    <View style={{marginTop:20}}>
      <Text style={styles.text}>ElevatedCards</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box color="lightgrey">One</Box>
        <Box color="lightgrey">Two</Box>
        <Box color="lightgrey">three</Box>
        <Box color="lightgrey">four</Box>
        <Box color="lightgrey">five</Box>
        <Box color="lightgrey">six</Box>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default ElevatedCards;
