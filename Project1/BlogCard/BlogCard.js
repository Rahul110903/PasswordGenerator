import React from "react"
import {Text,View,StyleSheet, Image, TouchableOpacity} from "react-native"

const BlogCard=()=>{
    return(
        <View style={{marginTop:20}}>
            <Text style={styles.text}>BlogCard</Text>
            <View style={styles.container}>
               <Text style={{fontWeight:"bold",fontSize:18,textAlign:"center",padding:10}}>Whats new in Javascript</Text>
               <View style={{alignItems:"center"}}>
                    <Image style={styles.image} source={require("../../assests/javascript.jpg")}/>
               </View>
               <View style={{flexDirection:"row",marginTop:20}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>Follow Me</Text>
                    </TouchableOpacity>
               </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    text:{
        fontSize:25,
        fontWeight:"bold",
    },
    container:{
        backgroundColor:"lightgrey",
        height:300,
        borderRadius:10,
    },
    image:{
        height:200,
        width:300,
        objectFit:"fill"
    },
    buttontext:{
        color:"blue",
        fontWeight:"bold",
    },
    button:{
        flex:1,
        alignItems:"center",
    }
})
export default BlogCard