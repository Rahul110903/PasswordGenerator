import React from "react"
import {Text,View,StyleSheet, Image} from "react-native"

const TrendingPlaces=()=>{
    return(
        <View style={{marginTop:30}}>
            <Text style={styles.text}>TrendingPlaces</Text>
             <View style={styles.container}>
                <Image style={styles.image} source={require("../../assests/image.jpg")}/>
                <Text style={{fontWeight:"bold",height:50,alignSelf:"center"}}>PinkCity,Jaipur</Text>
                <Text style={{fontWeight:"bold", height:50,alignSelf:"flex-end",marginTop:20}}>12min Away</Text>
             </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    container:{
        backgroundColor:"lightgrey",
        height:300,
        borderRadius:10,
    },
    image:{
        objectFit:"cover",
        height:200,
        width:392,
        borderRadius:10
    }
  });
export default TrendingPlaces