import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Project3 = () => {
  const [background, setBackground] = useState('');

  const generateColor = () => {
    const Hex = '123456789ABCDEF';
    let color = '#';

    for (let index = 0; index < 6; index++) {
      color += Hex[Math.floor(Math.random() * 15)];
    }
    setBackground(color);
  };

  return (
    <>
      <StatusBar backgroundColor={background} />
      <View style={[styles.container, {backgroundColor: background}]}>
        <View style={{flexDirection:"row",justifyContent:"space-around",marginVertical:20}}>
          <View style={styles.firstShape}></View>
          <View style={styles.secondShape}></View>
        </View>
        <View style={styles.thirdShape}></View>
        <TouchableOpacity onPress={() => generateColor()}>
          <View style={styles.btncontainer}>
            <Text style={styles.btntext}>press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  btncontainer: {
    backgroundColor: 'skyblue',
    padding: 20,
    borderRadius: 10,
    borderWidth: 0.75,
    alignSelf: 'center',
    marginBottom: 50,
  },
  btntext: {
    fontSize: 17,
    color: 'black',
    textTransform: 'uppercase',
  },
  firstShape: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  secondShape: {
    backgroundColor: 'orange',
    height: 100,
    width: 100,
    borderRadius:50
  },
  thirdShape:{
    backgroundColor:"blue",
    height:100,
    width:100,
    borderRadius:20,
    alignSelf:"center",
    marginBottom:100
  }
});

export default Project3;
