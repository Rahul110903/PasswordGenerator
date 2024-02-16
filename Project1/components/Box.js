import React from "react"
import {StyleSheet, Text,View} from "react-native"

const Box=({children,color})=>{
    return(
        <View style={{backgroundColor:color,borderRadius:10,margin:5}}>
            <Text style={styles.text}>{children}</Text> 
        </View>
    )
}
const styles=StyleSheet.create({
    text:{
        padding:40,
        color:"black"
    }
})
export default Box