import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Contacts = () => {
  return (
    <View style={{marginTop: 20}}>
      <Text style={styles.text}>Contacts</Text>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={styles.logo}>
          <Image
            style={styles.profile}
            source={require('../../assests/profile.webp')}
          />
        </View>
        <View style={{marginLeft: 10, justifyContent: 'center'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Rahul Singh</Text>
          <Text>React Native Developer</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={styles.logo}>
          <Image
            style={styles.profile}
            source={require('../../assests/profile.webp')}
          />
        </View>
        <View style={{marginLeft: 10, justifyContent: 'center'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Kushagra</Text>
          <Text>Senior AI and Data Analyst</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={styles.logo}>
          <Image
            style={styles.profile}
            source={require('../../assests/profile.webp')}
          />
        </View>
        <View style={{marginLeft: 10, justifyContent: 'center'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Abhishek Bajaj
          </Text>
          <Text>Junior Data Analyst</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={styles.logo}>
          <Image
            style={styles.profile}
            source={require('../../assests/profile.webp')}
          />
        </View>
        <View style={{marginLeft: 10, justifyContent: 'center'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Kartik Chauhan
          </Text>
          <Text>Junior UI/UX Developer</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  logo: {
    height: 60,
    width: 60,
    backgroundColor: 'black',
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth:0.50
  },
  profile: {
    height: 60,
    width: 60,
    objectFit: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default Contacts;
